import ClerkIcon from "../../assets/textures/projects/clerk.svg";
import ReactIcon from "../../assets/textures/projects/react.svg";
import TsIcon from "../../assets/textures/projects/ts.svg";
import GithubIcon from "../../assets/textures/projects/github.svg";
import type { Project } from "./types";

const portfolio: Project = {
  id: "portfolio",
  title: "Portfolio",
  subtitle: "Personal website inspired by osu!'s UI",
  stack: [
    { label: "Clerk", icon: ClerkIcon },
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
  ],
  year: 2026,
  tag: "Project",
  links: [
    {
      label: "GitHub",
      link: "https://github.com/chengxi600/portfolio",
      icon: GithubIcon,
    },
  ],
  details: {
    description: "test",
  },
  gallery: [
    {
      id: "portfolio-1",
      url: "https://images.unsplash.com/photo-1572851899646-a1f69c664e1e?auto=format&fit=crop&q=80&w=1170",
      title: "Landing Page",
    },
    {
      id: "portfolio-2",
      url: "https://images.unsplash.com/photo-1759247178379-0e8eba83a4a6?auto=format&fit=crop&q=80&w=687",
      title: "Projects Wheel",
    },
    {
      id: "portfolio-3",
      url: "https://images.unsplash.com/photo-1754968230523-052635c98f99?auto=format&fit=crop&q=80&w=736",
      title: "Project Details",
    },
    {
      id: "portfolio-4",
      url: "https://images.unsplash.com/photo-1643037508102-46fb319979c5?auto=format&fit=crop&q=80&w=764",
      title: "Menu View",
    },
  ],
};

export default portfolio;
