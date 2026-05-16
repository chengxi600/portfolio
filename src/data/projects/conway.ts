import type { Project } from "./types";

// Stack Icons
import JavaIcon from "@/assets/textures/projects/java.svg";

// Link Icons
import GithubIcon from "@/assets/textures/projects/github.svg";

// Images
import Conway from "@/assets/projects/conway/conway.gif";

const conway: Project = {
  id: "conway",
  title: "Conway's Game of Life",
  subtitle: "My very first project, Conway's Game of Life in Java",
  stack: [
    { label: "Java", icon: JavaIcon }
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
      url: Conway,
      title: "Conway's Game of Life",
    },
  ],
};

export default conway;
