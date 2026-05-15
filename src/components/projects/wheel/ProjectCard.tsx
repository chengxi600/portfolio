import { motion } from "motion/react";
import type { Project } from "@/data/projects";
import "./ProjectCard.css";
import useButtonSfx from "@/hooks/useButtonSfx";
import { ProjectTag } from "@/components/projects/ProjectTag";

type ProjectCardProps = {
  project: Project;
  width: number;
  scale: number;
  opacity: number;
  isSelected: boolean;
  onClick: () => void;
};

const SELECTED_LEFT_EXTENSION = 18;

function ProjectCard({
  project,
  width,
  scale,
  opacity,
  isSelected,
  onClick,
}: ProjectCardProps) {
  const selectedOffset = isSelected ? SELECTED_LEFT_EXTENSION : 0;
  const { playProjectHover, playProjectSelect } = useButtonSfx();

  const handleClick = () => {
    playProjectSelect();
    onClick();
  };

  return (
    <motion.div
      className={`osuProjectCard ${isSelected ? "osuProjectCard--selected" : ""}`}
      onMouseEnter={playProjectHover}
      style={{
      }}
      animate={{
        marginLeft: -selectedOffset,
        width: width + selectedOffset,
        scale,
        opacity,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.7 }}
      onClick={handleClick}
    >
      <div className="osuProjectCard__text">
        <span className="osuProjectCard__title">
          {project.title} ({project.year})
        </span>
        <span className="osuProjectCard__subtitle">{project.subtitle}</span>
      </div>
      <div className="osuProjectCard__stack">
        <ProjectTag tag={project.tag} />
        {project.stack.map((tech) => (
          <img key={tech.label} src={tech.icon} alt="" />
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
