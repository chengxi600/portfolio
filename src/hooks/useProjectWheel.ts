import type { WheelEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type WheelItemState<T> = {
  item: T;
  index: number;
  distance: number;
  scale: number;
  opacity: number;
};

type UseProjectWheelOptions<T> = {
  getItemHeight?: (item: T) => number;
  isFocusable?: (item: T) => boolean;
};

function useProjectWheel<T>(
  items: T[],
  itemHeight: number,
  { getItemHeight, isFocusable }: UseProjectWheelOptions<T> = {},
) {
  const listRef = useRef<HTMLDivElement>(null);
  const [listHeight, setListHeight] = useState(520);
  const [listWidth, setListWidth] = useState(360);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (listRef.current) {
        const rect = listRef.current.getBoundingClientRect();
        setListHeight(rect.height);
        setListWidth(rect.width);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const heights = useMemo(
    () => items.map((item) => getItemHeight?.(item) ?? itemHeight),
    [getItemHeight, itemHeight, items],
  );
  const totalHeight = heights.reduce((sum, height) => sum + height, 0);
  const firstHeight = heights[0] ?? itemHeight;
  const lastHeight = heights[heights.length - 1] ?? itemHeight;
  const minScroll = firstHeight / 2 - listHeight / 2;
  const maxScroll = totalHeight - lastHeight / 2 - listHeight / 2;

  const clampScroll = useCallback(
    (value: number) => Math.max(minScroll, Math.min(value, maxScroll)),
    [maxScroll, minScroll],
  );

  const trackOffset = -scrollY;

  const itemStates = useMemo(() => {
    let currentTop = trackOffset;

    return items.map((item, index) => {
      const height = heights[index] ?? itemHeight;
      const distance = currentTop + height / 2 - listHeight / 2;
      const steps = distance / itemHeight;
      const scale = 1 - Math.min(Math.abs(steps) * 0.03, 0.16);
      const opacity = 1 - Math.min(Math.abs(steps) * 0.18, 0.7);

      currentTop += height;

      return {
        item,
        index,
        distance,
        scale,
        opacity,
      };
    });
  }, [heights, items, itemHeight, listHeight, trackOffset]);

  const focusedIndex = useMemo(
    () => {
      const focusable = isFocusable ?? (() => true);
      const firstFocusableIndex = itemStates.findIndex((itemState) =>
        focusable(itemState.item),
      );
      if (firstFocusableIndex === -1) {
        return 0;
      }

      return itemStates.reduce((bestIndex, itemState, index) => {
        if (!focusable(itemState.item)) {
          return bestIndex;
        }
        const bestDistance = Math.abs(itemStates[bestIndex].distance);
        return Math.abs(itemState.distance) < bestDistance ? index : bestIndex;
      }, firstFocusableIndex);
    },
    [isFocusable, itemStates],
  );

  const resolveFocusableIndex = useCallback(
    (index: number) => {
      const focusable = isFocusable ?? (() => true);
      if (focusable(items[index])) {
        return index;
      }
      for (let i = index - 1; i >= 0; i -= 1) {
        if (focusable(items[i])) {
          return i;
        }
      }
      for (let i = index + 1; i < items.length; i += 1) {
        if (focusable(items[i])) {
          return i;
        }
      }
      return index;
    },
    [isFocusable, items],
  );

  const handleWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      setScrollY((value) => clampScroll(value + event.deltaY));
    },
    [clampScroll],
  );

  const handleItemClick = useCallback(
    (index: number) => {
      const targetIndex = resolveFocusableIndex(index);
      const targetDistance = itemStates[targetIndex]?.distance ?? 0;
      setScrollY((value) => clampScroll(value + targetDistance));
    },
    [clampScroll, itemStates, resolveFocusableIndex],
  );

  return {
    listRef,
    listHeight,
    listWidth,
    trackOffset,
    itemStates,
    focusedIndex,
    handleWheel,
    handleItemClick,
  };
}

export default useProjectWheel;
