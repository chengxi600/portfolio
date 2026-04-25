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
  github?: string;
  link?: string;
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
    link: "https://lgbtq-senior-housing.vercel.app/",
  },
  {
    id: "rl-stuff",
    title: "RL Playground",
    subtitle: "Collection of reinforcement learning baseline implementations",
    stack: [ReactIcon, TsIcon],
    year: 2021,
    tag: "Project",
    github: "https://github.com/chengxi600/RLStuff",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    subtitle: "Personal website inspired by osu!'s UI",
    stack: [ReactIcon, TsIcon],
    year: 2026,
    tag: "Project",
    github: "https://github.com/chengxi600/portfolio",
  },
  {
    id: "fillyb-exchange",
    title: "FillyB Exchange",
    subtitle: "Fake betting website for amateur esports leagues",
    stack: [ClerkIcon, TsIcon],
    year: 2026,
    tag: "Project",
    github: "https://github.com/OtakuExchange",
    link: "https://fillybexchange.vercel.app/",
  },
  {
    id: "satoru",
    title: "Satoru Desktop App",
    subtitle: "Anime hand gesture visualizer",
    stack: [ReactIcon, TsIcon],
    year: 2026,
    tag: "Project",
    github: "https://github.com/chengxi600/satoru-desktop",
    link: "https://github.com/chengxi600/satoru-desktop/releases/tag/v1.1.0",
  },
  {
    id: "genshin-optimizer",
    title: "Genshin Optimizer",
    subtitle: "Contributed to a Genshin Impact optimizer tool",
    stack: [ReactIcon, TsIcon],
    year: 2024,
    tag: "Open Source",
    github: "https://github.com/frzyc/genshin-optimizer",
    link: "https://frzyc.github.io/genshin-optimizer/"
  },
  {
    id: "rpg-concept",
    title: "RPG Concept",
    subtitle: "Realm of the Mad God clone concept",
    stack: [ReactIcon, TsIcon],
    year: 2018,
    tag: "Project",
    github: "https://github.com/chengxi600/RPGConcept",
    link: "https://chengxi600.medium.com/rpgconcept-hud-29cb36a64029"
  },
  {
    id: "conway",
    title: "Conway's Game of Life",
    subtitle: "My very first project, Conway's Game of Life in Java",
    stack: [ClerkIcon, ReactIcon, TsIcon],
    year: 2018,
    tag: "Project",
    github: "https://github.com/chengxi600/Java_Game-of-Life"
  },
  {
    id: "phirl",
    title: "PHIRL",
    subtitle: "Progress heuristic inverse reinforcement learning with Robot Study",
    stack: [ReactIcon, TsIcon],
    year: 2026,
    tag: "Research",
    github: "https://github.com/chengxi600/PHIRL-Kinova",
  }
];
