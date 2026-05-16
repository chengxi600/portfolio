import type { Project } from "./types";

// Stack Icons
import ReactIcon from "@/assets/textures/projects/react.svg";
import TsIcon from "@/assets/textures/projects/ts.svg";
import PrismaIcon from "@/assets/textures/projects/prisma.svg";

// Link Icons
import GithubIcon from "@/assets/textures/projects/github.svg";
import WebsiteIcon from "@/assets/textures/projects/website.svg";

// Images
import GenshinOptimizer from "@/assets/projects/genshin-optimizer/go.png";
import Characters from "@/assets/projects/genshin-optimizer/characters.png";
import Archive from "@/assets/projects/genshin-optimizer/archive.png";
import Artifacts from "@/assets/projects/genshin-optimizer/artifacts.png";

const genshinOptimizer: Project = {
  id: "genshin-optimizer",
  title: "Genshin Optimizer",
  subtitle: "Contributed to a Genshin Impact optimizer tool",
  stack: [
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
    { label: "Prisma ORM", icon: PrismaIcon }
  ],
  year: 2024,
  tag: "Open Source",
  links: [
    {
      label: "GitHub",
      link: "https://github.com/frzyc/genshin-optimizer",
      icon: GithubIcon,
    },
    {
      label: "Website",
      link: "https://frzyc.github.io/genshin-optimizer/",
      icon: WebsiteIcon,
    },
  ],
  details: {
    description: "test",
  },
  gallery: [
    {
      id: "genshin-1",
      url: GenshinOptimizer,
      title: "Genshin Optimizer",
    },
    {
      id: "genshin-2",
      url: Characters,
      title: "Characters",
    },
    {
      id: "genshin-3",
      url: Archive,
      title: "Archive",
    },
    {
      id: "genshin-4",
      url: Artifacts,
      title: "Artifacts",
    },
  ],
};

export default genshinOptimizer;
