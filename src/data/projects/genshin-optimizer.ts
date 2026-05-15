import ClerkIcon from "@/assets/textures/projects/clerk.svg";
import ReactIcon from "@/assets/textures/projects/react.svg";
import TsIcon from "@/assets/textures/projects/ts.svg";
import GithubIcon from "@/assets/textures/projects/github.svg";
import WebsiteIcon from "@/assets/textures/projects/website.svg";
import type { Project } from "./types";

const genshinOptimizer: Project = {
  id: "genshin-optimizer",
  title: "Genshin Optimizer",
  subtitle: "Contributed to a Genshin Impact optimizer tool",
  stack: [
    { label: "Clerk", icon: ClerkIcon },
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
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
      url: "https://images.unsplash.com/photo-1759247178379-0e8eba83a4a6?auto=format&fit=crop&q=80&w=687",
      title: "Character Builder",
    },
    {
      id: "genshin-2",
      url: "https://images.unsplash.com/photo-1754968230523-052635c98f99?auto=format&fit=crop&q=80&w=736",
      title: "Artifact Optimizer",
    },
    {
      id: "genshin-3",
      url: "https://images.unsplash.com/photo-1643037508102-46fb319979c5?auto=format&fit=crop&q=80&w=764",
      title: "Damage Calculator",
    },
    {
      id: "genshin-4",
      url: "https://images.unsplash.com/photo-1761078980679-e89e25fe279b?auto=format&fit=crop&q=80&w=687",
      title: "Team Comp Builder",
    },
    {
      id: "genshin-5",
      url: "https://images.unsplash.com/photo-1661980494567-40a5e01b699b?auto=format&fit=crop&q=80&w=685",
      title: "Inventory View",
    },
    {
      id: "genshin-6",
      url: "https://images.unsplash.com/photo-1761882725885-d3d8bd2032d1?auto=format&fit=crop&q=80&w=687",
      title: "Stats Overview",
    },
    {
      id: "genshin-7",
      url: "https://images.unsplash.com/photo-1760389005000-bf02bf24f463?auto=format&fit=crop&q=80&w=1123",
      title: "Weapon Comparisons",
    },
  ],
};

export default genshinOptimizer;
