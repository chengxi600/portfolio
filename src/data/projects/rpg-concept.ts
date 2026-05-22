import type { Project } from "./types";

// Stack Icons
import JavaIcon from "@/assets/textures/projects/java.svg";
import TiledIcon from "@/assets/textures/projects/tiled.svg";
import LibGDXIcon from "@/assets/textures/projects/libgdx.svg";

// Link Icons
import GithubIcon from "@/assets/textures/projects/github.svg";
import BlogIcon from "@/assets/textures/projects/blog.svg";

// Images
import HUD from "@/assets/projects/rpg-concept/hud.gif";
import Avatar from "@/assets/projects/rpg-concept/avatar.gif";
import Map from "@/assets/projects/rpg-concept/map.gif";
import TiledMap from "@/assets/projects/rpg-concept/tiled.webp";

const rpgConcept: Project = {
  id: "rpg-concept",
  title: "RPG Concept",
  subtitle: "Realm of the Mad God clone concept",
  stack: [
    { label: "Java", icon: JavaIcon },
    { label: "Tiled", icon: TiledIcon },
    { label: "LibGDX Framework", icon: LibGDXIcon },
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
    description: "This was a super fun project I worked on in high school trying to recreate the game 'Realm of the Mad God'. Used Tiled to make maps and Java's LibGDX framework for rendering the game. Tried to do a ECS (Entity Component System) design. Was able to implement shooting, changing attack speed, movement speed, oryx camera shake, picking/dropping items.",
  },
  gallery: [
    {
      id: "rpg-1",
      url: HUD,
      title: "HUD",
    },
    {
      id: "rpg-2",
      url: Avatar,
      title: "Avatar",
    },
    {
      id: "rpg-3",
      url: Map,
      title: "Map",
    },
    {
      id: "rpg-4",
      url: TiledMap,
      title: "Tiled Map",
    },
  ],
};

export default rpgConcept;
