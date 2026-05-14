import ClerkIcon from "../../assets/textures/projects/clerk.svg";
import ReactIcon from "../../assets/textures/projects/react.svg";
import TsIcon from "../../assets/textures/projects/ts.svg";
import GithubIcon from "../../assets/textures/projects/github.svg";
import type { Project } from "./types";

const phirl: Project = {
  id: "phirl",
  title: "PHIRL",
  subtitle:
    "Progress heuristic inverse reinforcement learning with Robot Study",
  stack: [
    { label: "Clerk", icon: ClerkIcon },
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
  ],
  year: 2026,
  tag: "Research",
  links: [
    {
      label: "GitHub",
      link: "https://github.com/chengxi600/PHIRL-Kinova",
      icon: GithubIcon,
    },
  ],
  details: {
    description: "test",
  },
  gallery: [
    {
      id: "phirl-1",
      url: "https://images.unsplash.com/photo-1761078980679-e89e25fe279b?auto=format&fit=crop&q=80&w=687",
      title: "Robot Arm Setup",
    },
    {
      id: "phirl-2",
      url: "https://images.unsplash.com/photo-1643037508102-46fb319979c5?auto=format&fit=crop&q=80&w=764",
      title: "Reward Function Plot",
    },
    {
      id: "phirl-3",
      url: "https://images.unsplash.com/photo-1754968230523-052635c98f99?auto=format&fit=crop&q=80&w=736",
      title: "Trajectory Visualization",
    },
    {
      id: "phirl-4",
      url: "https://images.unsplash.com/photo-1759247178379-0e8eba83a4a6?auto=format&fit=crop&q=80&w=687",
      title: "Training Results",
    },
    {
      id: "phirl-5",
      url: "https://images.unsplash.com/photo-1760389005000-bf02bf24f463?auto=format&fit=crop&q=80&w=1123",
      title: "Human Demo Collection",
    },
  ],
};

export default phirl;
