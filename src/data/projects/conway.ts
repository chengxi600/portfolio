import ClerkIcon from "../../assets/textures/projects/clerk.svg";
import ReactIcon from "../../assets/textures/projects/react.svg";
import TsIcon from "../../assets/textures/projects/ts.svg";
import GithubIcon from "../../assets/textures/projects/github.svg";
import type { Project } from "./types";

const conway: Project = {
  id: "conway",
  title: "Conway's Game of Life",
  subtitle: "My very first project, Conway's Game of Life in Java",
  stack: [
    { label: "Clerk", icon: ClerkIcon },
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
  ],
  year: 2018,
  tag: "Project",
  links: [
    {
      label: "GitHub",
      link: "https://github.com/chengxi600/Java_Game-of-Life",
      icon: GithubIcon,
    },
  ],
  details: {
    description: "test",
  },
  gallery: [
    {
      id: "conway-1",
      url: "https://images.unsplash.com/photo-1761882835101-02ab45ac0726?auto=format&fit=crop&q=80&w=690",
      title: "Grid Simulation",
    },
  ],
};

export default conway;
