import type { CSSProperties, ReactNode } from "react";
import "./NavButton.css";
import { motion } from "motion/react";

interface NavButtonProps {
  icon: ReactNode;
  title: string;
  color: string;
  isFirst?: boolean;
}

function NavButton({ icon, title, color, isFirst = false }: NavButtonProps) {
  type NavButtonStyle = CSSProperties & { ["--osu-nav-color"]?: string };
  const style: NavButtonStyle = {
    ["--osu-nav-color"]: color,
  };

  const iconVariants = {
    initial: { y: 0 },
    hover: {
      y: [0, -10, 2, 0],
      transition: {
        duration: 0.4,
        repeat: 2,
      },
    },
  };

  return (
    <motion.button
      type="button"
      className={`osuNavButton ${isFirst ? "osuNavButton--first" : "osuNavButton--notFirst"}`}
      style={style}
      layout
      initial="initial"
      animate="initial"
      whileHover="hover"
      whileTap={{ paddingInline: 10 }}
      transition={{ type: "spring", stiffness: 520, damping: 42, mass: 0.7 }}
      variants={{
        hover: { paddingInline: 18 },   // hover padding
      }}
    >
      <div className="osuNavButton__inner">
        <motion.div
          variants={iconVariants}
        >
          {icon}
        </motion.div>
        <span className="osuNavButton__title">{title}</span>
      </div>
    </motion.button>
  );
}

export default NavButton;
