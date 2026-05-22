import type { Project } from "./types";

// Stack Icons
import ReactIcon from "@/assets/textures/projects/react.svg";
import TsIcon from "@/assets/textures/projects/ts.svg";
import FramerIcon from "@/assets/textures/projects/framer.svg";

// Link Icons
import GithubIcon from "@/assets/textures/projects/github.svg";
import WebsiteIcon from "@/assets/textures/projects/website.svg";

// Images
import Menu from "@/assets/projects/portfolio/menu.png";
import MenuExpanded from "@/assets/projects/portfolio/menu2.png";
import Projects from "@/assets/projects/portfolio/projects.png";

const portfolio: Project = {
  id: "portfolio",
  title: "Portfolio",
  subtitle: "Personal website inspired by osu!'s UI",
  stack: [
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
    { label: "Framer Motion", icon: FramerIcon },
  ],
  year: 2026,
  tag: "Project",
  links: [
    {
      label: "GitHub",
      link: "https://github.com/chengxi600/portfolio",
      icon: GithubIcon,
    },
    {
      label: "Website",
      link: "https://chengxitsou-portfolio.vercel.app/",
      icon: WebsiteIcon,
    },
  ],
  details: {
    description: "A project portfolio inspired by the rhythm game osu!'s UI. Mainly has my more recent projects.",
  },
  gallery: [
    {
      id: "portfolio-1",
      url: Menu,
      title: "Landing Page",
    },
    {
      id: "portfolio-3",
      url: MenuExpanded,
      title: "Menu View",
    },
    {
      id: "portfolio-2",
      url: Projects,
      title: "Projects View",
    }
  ],
};

export default portfolio;
