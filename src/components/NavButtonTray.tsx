import SettingsIcon from "@mui/icons-material/Settings";
import MenuButton from "./MenuButton";
import NavButton from "./NavButton";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

const navButtons = [
  {
    title: "play",
    color: "#7259D7",
    icon: <SettingsIcon style={{ color: "white" }} />,
  },
  {
    title: "edit",
    color: "#F7B002",
    icon: <SettingsIcon style={{ color: "white" }} />,
  },
  {
    title: "browse",
    color: "#AEC300",
    icon: <SettingsIcon style={{ color: "white" }} />,
  },
  {
    title: "exit",
    color: "#FE55A5",
    icon: <SettingsIcon style={{ color: "white" }} />,
  },
];

const menuButtonTransition = {
  type: "tween" as const,
  ease: "linear" as const,
  duration: 0.1,
  opacity: { duration: 0 }
};

function NavButtonTray() {
  const [expanded, setExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
          />
        </motion.div>
        {navButtons.map((button) => (
          <NavButton
            key={button.title}
            icon={button.icon}
            title={button.title}
            color={button.color}
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
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default NavButtonTray;
