import MenuButton from "./MenuButton";
import NavButton from "./NavButton";
import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import useButtonSfx from "../hooks/useButtonSfx";
import useNavMenus from "../hooks/useNavMenus";

const menuButtonTransition = {
  type: "tween" as const,
  ease: "linear" as const,
  duration: 0.1,
  opacity: { duration: 0 },
};

function NavButtonTray() {
  const [expanded, setExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { currentMenu } = useNavMenus({ setExpanded });
  const {
    playHover,
    playLogoClick,
    playLogoEnter,
  } = useButtonSfx();

  const handleMenuButtonClick = () => {
    setIsAnimating(true);
    setExpanded(true);
    if (expanded) {
      // TODO: enter next screen
    }
  };

  const NavButtonTrayExpanded = () => {
    const [firstButton, ...restButtons] = useMemo(() => currentMenu, [currentMenu]);

    return (
      <motion.div
        key="expanded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.12 },
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#393939",
            width: "100vw",
            height: "12vh",
          }}
        >
          {/* FIRST BUTTON */}
          <NavButton
            key={firstButton.title}
            icon={firstButton.icon}
            title={firstButton.title}
            color={firstButton.color}
            sfx={{ hover: playHover, click: firstButton.clickSfx }}
            onClick={firstButton.onClick}
            isFirst
          />

          {/* MENU BUTTON */}
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

          {/* REST OF BUTTONS */}
          {restButtons.map((button) => (
            <NavButton
              key={button.title}
              icon={button.icon}
              title={button.title}
              color={button.color}
              sfx={{ hover: playHover, click: button.clickSfx }}
              onClick={button.onClick}
            />
          ))}
        </div>
      </motion.div>
    );
  };

  const NavButtonTrayCollapsed = () => {
    return (
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
    );
  };

  return (
    <LayoutGroup id="navTray">
      <AnimatePresence initial={false} mode="popLayout">
        {expanded ? <NavButtonTrayExpanded /> : <NavButtonTrayCollapsed />}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default NavButtonTray;
