import type { Project } from "./types";

// Stack Icons
import PythonIcon from "@/assets/textures/projects/python.svg";
import PytorchIcon from "@/assets/textures/projects/pytorch.svg";
import GymIcon from "@/assets/textures/projects/gym.svg";

// Link Icons
import GithubIcon from "@/assets/textures/projects/github.svg";

// Images
import LunarLander from "@/assets/projects/rl-stuff/lunar.gif";
import TRPO from "@/assets/projects/rl-stuff/trpo.png";
import MountainCar from "@/assets/projects/rl-stuff/mountaincar.gif";
import Eval from "@/assets/projects/rl-stuff/eval.png";

const rlStuff: Project = {
  id: "rl-stuff",
  title: "RL Playground",
  subtitle: "Collection of reinforcement learning baseline implementations",
  stack: [
    { label: "Python", icon: PythonIcon },
    { label: "Pytorch", icon: PytorchIcon },
    { label: "Gym", icon: GymIcon },
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
    description: "After taking an AI course over summer, I got inspired to dive deeper into Reinforcement Learning. Went through the Sutton & Barto textbook and implemented algorithms from landmark papers such as DQN, A2C, PPO, TRPO, DDPG, and more. Evaluated implementations on toy domains on OpenAI's Gym. Learned a lot about the literature in this field and how to read papers.",
  },
  gallery: [
    {
      id: "rl-1",
      url: LunarLander,
      title: "Lunar Lander",
    },
    {
      id: "rl-2",
      url: TRPO,
      title: "TRPO",
    },
    {
      id: "rl-3",
      url: MountainCar,
      title: "Mountain Car",
    },
    {
      id: "rl-4",
      url: Eval,
      title: "Evaluation",
    },
  ],
};

export default rlStuff;
