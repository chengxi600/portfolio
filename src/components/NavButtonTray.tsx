import SettingsIcon from "@mui/icons-material/Settings";
import BookIcon from "@mui/icons-material/Book";
import ComputerIcon from "@mui/icons-material/Computer";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuButton from "./MenuButton";
import NavButton from "./NavButton";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import useButtonSfx from "../hooks/useButtonSfx";

const navButtons = [
  {
    title: "projects",
    color: "#7259D7",
    icon: <ComputerIcon style={{ color: "white" }} />,
  },
  {
    title: "socials",
    color: "#F7B002",
    icon: <AccountCircleIcon style={{ color: "white" }} />,
  },
  {
    title: "blog",
    color: "#AEC300",
    icon: <BookIcon style={{ color: "white" }} />,
  },
  {
    title: "about",
    color: "#FE55A5",
    icon: <InfoIcon style={{ color: "white" }} />,
  },
];

const menuButtonTransition = {
  type: "tween" as const,
  ease: "linear" as const,
  duration: 0.1,
  opacity: { duration: 0 },
};

function NavButtonTray() {
  const [expanded, setExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { playHover, playLogoClick, playLogoEnter, playButtonClick, playButtonEnter } = useButtonSfx();

  const handleMenuButtonClick = () => {
    setIsAnimating(true);
    setExpanded((prev) => !prev);
  };

  const NavButtonTrayExpanded = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#393939",
          width: "100vw",
          height: "12vh",
        }}
      >
        <NavButton
          icon={<SettingsIcon style={{ color: "white" }} />}
          title="settings"
          color="#606060"
          isFirst
          sfx={{ hover: playHover, click: playButtonClick }}
        />
        <motion.div
          layoutId="osuMenuButton"
          transition={menuButtonTransition}
          onLayoutAnimationComplete={() => setIsAnimating(false)}
        >
          <MenuButton
            style={{ width: "30vmin" }}
            onClick={handleMenuButtonClick}
            disableHover={isAnimating}
            sfx={{ hover: playHover, click: playLogoEnter }}
          />
        </motion.div>
        {navButtons.map((button) => (
          <NavButton
            key={button.title}
            icon={button.icon}
            title={button.title}
            color={button.color}
            sfx={{ hover: playHover, click: playButtonClick }}
          />
        ))}
      </div>
    );
  };

  return (
    <LayoutGroup id="navTray">
      <AnimatePresence initial={false} mode="popLayout">
        {expanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.12 },
            }}
          >
            <NavButtonTrayExpanded />
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.12 },
            }}
          >
            <motion.div
              layoutId="osuMenuButton"
              transition={menuButtonTransition}
              onLayoutAnimationComplete={() => setIsAnimating(false)}
            >
              <MenuButton
                style={{ width: "55vmin" }}
                onClick={handleMenuButtonClick}
                disableHover={isAnimating}
                sfx={{ hover: playHover, click: playLogoClick }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default NavButtonTray;
