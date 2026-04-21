import { motion } from "motion/react";
import Logo from "../assets/logo.png";
import LogoBackground from "../assets/logo_background.jpg";
import { useMemo, useState } from "react";
import "./MenuButton.css";
import type { CSSProperties } from "react";

export default function MenuButton({
  style,
  onClick,
  disableHover,
}: {
  style?: CSSProperties;
  onClick?: () => void;
  disableHover?: boolean;
}) {
  const [buttonScale, setButtonScale] = useState(1);
  const pulseScale = useMemo(
    () => [1, 1.02, 1].map((scale) => scale * buttonScale),
    [buttonScale],
  );

  return (
    <motion.button
      onClick={onClick}
      style={{ zIndex: 1000, ...style }}
      className="osuMenu__logoButton"
      layout
      onHoverStart={() => !disableHover && setButtonScale(1.1)}
      onHoverEnd={() => !disableHover && setButtonScale(1)}
      onTapStart={() => !disableHover && setButtonScale(0.98)}
      animate={{ scale: pulseScale }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <motion.div
        className="osuMenu__logoBg"
        style={{ backgroundImage: `url(${LogoBackground})` }}
        aria-hidden="true"
        animate={{ backgroundPositionX: ["0px", "-900px"] }}
        transition={{
          duration: 80,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <img className="osuMenu__logoImage" src={Logo} alt="" draggable={false} />
    </motion.button>
  );
}
