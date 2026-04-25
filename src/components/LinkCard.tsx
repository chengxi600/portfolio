import { motion } from "motion/react";
import "./ProjectCard.css";

type LinkCardProps = {
  label: string;
  width: number;
  scale: number;
  opacity: number;
  isSelected: boolean;
  onClick: () => void;
};

const SELECTED_LEFT_EXTENSION = 18;

function LinkCard({ label, width, scale, opacity, isSelected, onClick }: LinkCardProps) {
  const selectedOffset = isSelected ? SELECTED_LEFT_EXTENSION : 0;

  return (
    <motion.div
      className={`osuProjectCard osuProjectCard--link ${isSelected ? "osuProjectCard--selected" : ""}`}
      animate={{
        marginLeft: -selectedOffset,
        width: width + selectedOffset,
        scale,
        opacity,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.7 }}
      onClick={onClick}
    >
      <span className="osuProjectCard__linkLabel">{label}</span>
    </motion.div>
  );
}

export default LinkCard;
