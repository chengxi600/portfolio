import ClerkIcon from "../../assets/textures/projects/clerk.svg";
import ReactIcon from "../../assets/textures/projects/react.svg";
import TsIcon from "../../assets/textures/projects/ts.svg";
import GithubIcon from "../../assets/textures/projects/github.svg";
import BlogIcon from "../../assets/textures/projects/blog.svg";
import type { Project } from "./types";

const rpgConcept: Project = {
  id: "rpg-concept",
  title: "RPG Concept",
  subtitle: "Realm of the Mad God clone concept",
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
      link: "https://github.com/chengxi600/RPGConcept",
      icon: GithubIcon,
    },
    {
      label: "Blog",
      link: "https://chengxi600.medium.com/rpgconcept-hud-29cb36a64029",
      icon: BlogIcon,
    },
  ],
  details: {
    description: "test",
  },
  gallery: [
    {
      id: "rpg-1",
      url: "https://images.unsplash.com/photo-1756299792672-157811bf1005?auto=format&fit=crop&q=80&w=1074",
      title: "Game World",
    },
    {
      id: "rpg-2",
      url: "https://images.unsplash.com/photo-1572851899646-a1f69c664e1e?auto=format&fit=crop&q=80&w=1170",
      title: "HUD Design",
    },
    {
      id: "rpg-3",
      url: "https://images.unsplash.com/photo-1761165307495-56bd564d322f?auto=format&fit=crop&q=80&w=663",
      title: "Combat System",
    },
    {
      id: "rpg-4",
      url: "https://images.unsplash.com/photo-1761775915848-467e41c1c4db?auto=format&fit=crop&q=80&w=689",
      title: "Inventory Screen",
    },
  ],
};

export default rpgConcept;
