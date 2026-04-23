import type { WheelEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type WheelItemState<T> = {
  item: T;
  index: number;
  distance: number;
  scale: number;
  opacity: number;
};

function useProjectWheel<T>(items: T[], itemHeight: number) {
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

  const totalHeight = items.length * itemHeight;
  const maxScroll = Math.max(0, totalHeight - listHeight);
  const centerOffset = listHeight / 2 - itemHeight / 2;
  const minScroll = -centerOffset;
  const maxCenteredScroll = maxScroll + centerOffset;

  const clampScroll = useCallback(
    (value: number) => Math.max(minScroll, Math.min(value, maxCenteredScroll)),
    [maxCenteredScroll, minScroll],
  );

  const trackOffset = -scrollY;

  const itemStates = useMemo(
    () =>
      items.map((item, index) => {
        const itemY = index * itemHeight + trackOffset;
        const distance = itemY + itemHeight / 2 - listHeight / 2;
        const steps = distance / itemHeight;
        const scale = 1 - Math.min(Math.abs(steps) * 0.03, 0.16);
        const opacity = 1 - Math.min(Math.abs(steps) * 0.18, 0.7);

        return {
          item,
          index,
          distance,
          scale,
          opacity,
        };
      }),
    [items, itemHeight, listHeight, trackOffset],
  );

  const focusedIndex = useMemo(
    () =>
      itemStates.reduce((bestIndex, item, index) => {
        const bestDistance = Math.abs(itemStates[bestIndex].distance);
        return Math.abs(item.distance) < bestDistance ? index : bestIndex;
      }, 0),
    [itemStates],
  );

  const handleWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      setScrollY((value) => clampScroll(value + event.deltaY));
    },
    [clampScroll],
  );

  const handleItemClick = useCallback(
    (distance: number) => {
      setScrollY((value) => clampScroll(value + distance));
    },
    [clampScroll],
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
