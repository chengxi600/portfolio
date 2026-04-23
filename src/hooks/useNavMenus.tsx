import SettingsIcon from "@mui/icons-material/Settings";
import BookIcon from "@mui/icons-material/Book";
import ComputerIcon from "@mui/icons-material/Computer";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useMemo, useState } from "react";
import useButtonSfx from "./useButtonSfx";
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  title: string;
  color: string;
  icon: React.ReactNode;
  onClick?: () => void;
  clickSfx?: () => void;
}

type MenuId = "main" | "socials";

function useNavMenus({
  setExpanded,
}: {
  setExpanded: (expanded: boolean) => void;
}) {
  const {
    playButtonClick,
    playButtonEnter,
  } = useButtonSfx();
  const [menuId, setMenuId] = useState<MenuId>("main");
  const navigate = useNavigate();

  const menus = useMemo(() => {
    const mainMenu: NavButtonProps[] = [
      {
        title: "settings",
        color: "#606060",
        icon: <SettingsIcon style={{ color: "white" }} />,
        clickSfx: playButtonClick,
      },
      {
        title: "projects",
        color: "#7259D7",
        icon: <ComputerIcon style={{ color: "white" }} />,
        clickSfx: playButtonClick,
        onClick: () => {
          navigate("/projects");
        },
      },
      {
        title: "blog",
        color: "#F7B002",
        icon: <BookIcon style={{ color: "white" }} />,
        clickSfx: playButtonEnter,
        onClick: () => {
          window.open("https://chengxi600.medium.com/", "_blank");
        },
      },
      {
        title: "socials",
        color: "#AEC300",
        icon: <AccountCircleIcon style={{ color: "white" }} />,
        clickSfx: playButtonClick,
        onClick: () => {
          setMenuId("socials");
        },
      },
      {
        title: "exit",
        color: "#FE55A5",
        icon: <HighlightOffIcon style={{ color: "white" }} />,
        clickSfx: playButtonClick,
        onClick: () => {
          setExpanded(false);
          setMenuId("main");
        },
      },
    ];

    const socialsMenu: NavButtonProps[] = [
      {
        title: "back",
        color: "#6F8000",
        icon: <ChevronLeftIcon style={{ color: "white" }} />,
        clickSfx: playButtonClick,
        onClick: () => {
          setMenuId("main");
        },
      },
      {
        title: "github",
        color: "#AEC300",
        icon: <GitHubIcon style={{ color: "white" }} />,
        clickSfx: playButtonEnter,
        onClick: () => {
          window.open("https://github.com/chengxi600", "_blank");
        },
      },
      {
        title: "linkedin",
        color: "#AEC300",
        icon: <LinkedInIcon style={{ color: "white" }} />,
        clickSfx: playButtonEnter,
        onClick: () => {
          window.open("https://www.linkedin.com/in/cheng-xi-tsou/", "_blank");
        },
      },
      {
        title: "email",
        color: "#AEC300",
        icon: <EmailIcon style={{ color: "white" }} />,
        clickSfx: playButtonEnter,
        onClick: () => {
          window.open("mailto:chengxi600@gmail.com", "_blank");
        },
      },
    ];

    return { main: mainMenu, socials: socialsMenu };
  }, [playButtonClick, playButtonEnter, setExpanded]);

  const currentMenu = menus[menuId];

  return { currentMenu };
}

export default useNavMenus;
