import { motion } from "motion/react";
import "./ProjectsView.css";
import ProjectCard from "../components/ProjectCard";
import useProjectWheel from "../hooks/useProjectWheel";
import useProjectList from "../hooks/useProjectList";


const ITEM_HEIGHT = 84;

function ProjectsView() {

  const { items } = useProjectList();
  const {
    listRef,
    listWidth,
    trackOffset,
    itemStates,
    focusedIndex,
    handleWheel,
    handleItemClick,
  } = useProjectWheel(items, ITEM_HEIGHT);

  return (
    <div className="osuProjectsView">
      <section className="osuProjectsDetails">
        <h1>Project Details</h1>
        <p>Replace this with your detail panel.</p>
      </section>

      <section
        className="osuProjectWheel"
        ref={listRef}
        onWheel={handleWheel}
      >
        <motion.div
          className="osuProjectWheel__track"
          animate={{ y: trackOffset }}
          transition={{ type: "spring", stiffness: 180, damping: 28, mass: 0.6 }}
        >
          {itemStates.map((itemState) => {
            const isFocused = itemState.index === focusedIndex;
            return (
              <ProjectCard
                key={`${itemState.item.id}-${itemState.index}`}
                project={itemState.item}
                width={listWidth}
                scale={itemState.scale}
                opacity={itemState.opacity}
                isFocused={isFocused}
                onClick={() => handleItemClick(itemState.distance)}
              />
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}

export default ProjectsView;
