import ClerkIcon from "../assets/textures/projects/clerk.svg";
import ReactIcon from "../assets/textures/projects/react.svg";
import TsIcon from "../assets/textures/projects/ts.svg";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  stack: string[];
  year: number;
  tag: "Project" | "Research" | "Open Source";
};

export const projects: Project[] = [
  {
    id: "lgbt-senior-housing",
    title: "LGBT Senior Housing",
    subtitle:
      "Website for The Pryde, a LGBT senior housing community in Boston",
    stack: [ClerkIcon, ReactIcon, TsIcon],
    year: 2025,
    tag: "Project",
  },
  {
    id: "rl-stuff",
    title: "RL Playground",
    subtitle: "Collection of reinforcement learning baseline implementations",
    stack: [ReactIcon, TsIcon],
    year: 2021,
    tag: "Project",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    subtitle: "Personal website inspired by osu!'s UI",
    stack: [ReactIcon, TsIcon],
    year: 2026,
    tag: "Project",
  },
  {
    id: "fillyb-exchange",
    title: "FillyB Exchange",
    subtitle: "Fake betting website for amateur esports leagues",
    stack: [ClerkIcon, TsIcon],
    year: 2026,
    tag: "Project",
  },
  {
    id: "satoru",
    title: "Satoru Desktop App",
    subtitle: "Anime hand gesture visualizer",
    stack: [ReactIcon, TsIcon],
    year: 2026,
    tag: "Project",
  },
  {
    id: "genshin-optimizer",
    title: "Genshin Optimizer",
    subtitle: "Contributed to a Genshin Impact optimizer tool",
    stack: [ReactIcon, TsIcon],
    year: 2024,
    tag: "Open Source",
  },
  {
    id: "rpg-concept",
    title: "RPG Concept",
    subtitle: "Realm of the Mad God clone concept",
    stack: [ReactIcon, TsIcon],
    year: 2018,
    tag: "Project",
  },
  {
    id: "conway",
    title: "Conway's Game of Life",
    subtitle: "My very first project, Conway's Game of Life in Java",
    stack: [ClerkIcon, ReactIcon, TsIcon],
    year: 2018,
    tag: "Project",
  },
  {
    id: "phirl",
    title: "PHIRL",
    subtitle: "Progress heuristic inverse reinforcement learning with Robot Study",
    stack: [ReactIcon, TsIcon],
    year: 2026,
    tag: "Research",
  }
];
