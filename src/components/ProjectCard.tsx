import { motion } from "motion/react";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
  width: number;
  scale: number;
  opacity: number;
  isFocused: boolean;
  onClick: () => void;
};

function ProjectCard({
  project,
  width,
  scale,
  opacity,
  isFocused,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      className="osuProjectCard"
      animate={{
        marginLeft: 0,
        width,
        scale,
        opacity,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.7 }}
      onClick={onClick}
    >
      <div className="osuProjectCard__text">
        <span className="osuProjectCard__title">
          {project.title} ({project.year})
        </span>
        <span className="osuProjectCard__subtitle">{project.subtitle}</span>
      </div>
      <div className="osuProjectCard__stack">
        <ProjectTag tag={project.tag} />
        {project.stack.map((icon) => (
          <img key={icon} src={icon} alt="" />
        ))}
      </div>
    </motion.div>
  );
}

function ProjectTag({ tag }: { tag: string }) {
  return (
    <div className="osuProjectCard__tag">
      <span className="osuProjectCard__tag__text">{tag.toUpperCase()}</span>
    </div>
  );
}

export default ProjectCard;
