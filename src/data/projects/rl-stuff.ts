import ClerkIcon from "../../assets/textures/projects/clerk.svg";
import ReactIcon from "../../assets/textures/projects/react.svg";
import TsIcon from "../../assets/textures/projects/ts.svg";
import GithubIcon from "../../assets/textures/projects/github.svg";
import type { Project } from "./types";

const rlStuff: Project = {
  id: "rl-stuff",
  title: "RL Playground",
  subtitle: "Collection of reinforcement learning baseline implementations",
  stack: [
    { label: "Clerk", icon: ClerkIcon },
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
  ],
  year: 2021,
  tag: "Project",
  links: [
    {
      label: "GitHub",
      link: "https://github.com/chengxi600/RLStuff",
      icon: GithubIcon,
    },
  ],
  details: {
    description: "test",
  },
  gallery: [
    {
      id: "rl-1",
      url: "https://images.unsplash.com/photo-1760389005000-bf02bf24f463?auto=format&fit=crop&q=80&w=1123",
      title: "Training Curves",
    },
    {
      id: "rl-2",
      url: "https://images.unsplash.com/photo-1761165307495-56bd564d322f?auto=format&fit=crop&q=80&w=663",
      title: "Agent Visualization",
    },
    {
      id: "rl-3",
      url: "https://images.unsplash.com/photo-1756299792672-157811bf1005?auto=format&fit=crop&q=80&w=1074",
      title: "Environment Render",
    },
  ],
};

export default rlStuff;
