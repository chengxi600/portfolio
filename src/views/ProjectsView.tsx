import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import "./ProjectsView.css";
import ProjectCard from "../components/ProjectCard";
import LinkCard from "../components/LinkCard";
import useProjectWheel from "../hooks/useProjectWheel";
import useProjectList from "../hooks/useProjectList";
import useButtonSfx from "../hooks/useButtonSfx";

const PROJECT_ITEM_HEIGHT = 84;
const PROJECT_LINK_HEIGHT = 56;

function ProjectsView() {
  const { items, expandedProjectId, setExpandedProjectId } = useProjectList();
  const {
    listRef,
    listWidth,
    trackOffset,
    itemStates,
    handleWheel,
    handleItemClick,
  } = useProjectWheel(items, PROJECT_ITEM_HEIGHT, {
    getItemHeight: (item) =>
      item.type === "project" ? PROJECT_ITEM_HEIGHT : PROJECT_LINK_HEIGHT,
    isFocusable: (item) => item.type === "project",
  });
  const pendingFocusId = useRef<string | null>(null);
  const { playProjectHover } = useButtonSfx();
  const lastHoverSfxAt = useRef(0);

  useEffect(() => {
    const targetId = pendingFocusId.current;
    if (!targetId) {
      return;
    }
    const targetIndex = itemStates.findIndex(
      (itemState) =>
        itemState.item.type === "project" && itemState.item.id === targetId,
    );
    if (targetIndex >= 0) {
      handleItemClick(targetIndex);
      pendingFocusId.current = null;
    }
  }, [handleItemClick, itemStates]);

  return (
    <div className="osuProjectsView">
      <section className="osuProjectsDetails">
        <h1>Project Details</h1>
        <p>Replace this with your detail panel.</p>
      </section>

      <section
        className="osuProjectWheel"
        ref={listRef}
        onWheel={(event) => {
          handleWheel(event);
          const now = Date.now();
          if (now - lastHoverSfxAt.current > 90) {
            playProjectHover();
            lastHoverSfxAt.current = now;
          }
        }}
      >
        <motion.div
          className="osuProjectWheel__track"
          animate={{ y: trackOffset }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 28,
            mass: 0.6,
          }}
        >
          {itemStates.map((itemState) => {
            const item = itemState.item;

            if (item.type === "project") {
              return (
                <ProjectCard
                  key={`${item.id}-${itemState.index}`}
                  project={item.project}
                  width={listWidth}
                  scale={itemState.scale}
                  opacity={itemState.opacity}
                  isSelected={item.id === expandedProjectId}
                  onClick={() => {
                    setExpandedProjectId(item.id);
                    pendingFocusId.current = item.id;
                  }}
                />
              );
            }

            return (
              <LinkCard
                key={`${item.id}-${itemState.index}`}
                linkInfo={item.linkInfo}
                width={listWidth}
                scale={itemState.scale}
                opacity={itemState.opacity}
                isSelected={item.parentId === expandedProjectId}
                onClick={() => {
                  pendingFocusId.current = item.parentId;
                }}
              />
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}

export default ProjectsView;
