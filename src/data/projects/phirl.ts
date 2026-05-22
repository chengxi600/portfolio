import type { Project } from "./types";

// Stack Icons
import PythonIcon from "@/assets/textures/projects/python.svg";
import GymIcon from "@/assets/textures/projects/gym.svg";
import ROSIcon from "@/assets/textures/projects/ros.svg";

// Link Icons
import GithubIcon from "@/assets/textures/projects/github.svg";

// Images
import Paper from "@/assets/projects/phirl/paper.png";

const phirl: Project = {
  id: "phirl",
  title: "PHIRL",
  subtitle:
    "Progress heuristic inverse reinforcement learning with Robot Study",
  stack: [
    { label: "Python", icon: PythonIcon },
    { label: "Gym", icon: GymIcon },
    { label: "ROS", icon: ROSIcon },
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
    description: "Worked with a PhD student Hang Yu from the AABL lab to implement a real robot study that involved collecting demonstrations, replaying and annotating trajectories, and training on a Kinova Gen3 Lite Arm on a brushing task.",
  },
  gallery: [
    {
      id: "phirl-1",
      url: Paper,
      title: "Paper",
    }
  ],
};

export default phirl;
