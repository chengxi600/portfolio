import { motion } from "motion/react";
import "./ProjectCard.css";
import "./LinkCard.css";
import type { LinkInfo } from "../data/projects";
import useButtonSfx from "../hooks/useButtonSfx";

type LinkCardProps = {
  linkInfo: LinkInfo;
  width: number;
  scale: number;
  opacity: number;
  isSelected: boolean;
  onClick: () => void;
};

const SELECTED_LEFT_EXTENSION = 18;

function LinkCard({ linkInfo, width, scale, opacity, isSelected, onClick }: LinkCardProps) {
  const selectedOffset = isSelected ? SELECTED_LEFT_EXTENSION : 0;
  const { playProjectHover } = useButtonSfx();

  const handleClick = () => {
    window.open(linkInfo.link, "_blank");
    onClick();
  };

  return (
    <motion.div
      className={`osuProjectCard osuProjectCard--link ${isSelected ? "osuProjectCard--selected" : ""}`}
      onMouseEnter={playProjectHover}
      animate={{
        marginLeft: -selectedOffset,
        width: width + selectedOffset,
        scale,
        opacity,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.7 }}
      onClick={handleClick}
    >
      <img key={linkInfo.icon} src={linkInfo.icon} alt="" />
      <span className="osuProjectCard__linkLabel">{linkInfo.label}</span>
    </motion.div>
  );
}

export default LinkCard;
