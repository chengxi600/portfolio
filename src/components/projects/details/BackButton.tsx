import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { motion } from "motion/react";
import useButtonSfx from "@/hooks/useButtonSfx";
import "./BackButton.css";

function BackButton({ onClick }: { onClick: () => void }) {
  const { playButtonClick } = useButtonSfx();

  const iconVariants = {
    initial: { y: 0 },
    hover: {
      y: [0, -6, 2, 0],
      transition: {
        duration: 0.4,
        repeat: 2,
      },
    },
  };

  const handleClick = () => {
    playButtonClick();
    onClick();
  };

  return (
    <motion.button
      type="button"
      className="osuBackButton"
      initial="initial"
      animate="initial"
      whileHover="hover"
      onClick={handleClick}
    >
      <span className="osuBackButton__inner">
        <motion.span
          className="osuBackButton__iconWrap"
          variants={iconVariants}
        >
          <ChevronLeftIcon style={{ color: "white", fontSize: 20 }} />
        </motion.span>
        <span className="osuBackButton__label">Back</span>
      </span>
    </motion.button>
  );
}

export default BackButton;
