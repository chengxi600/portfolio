import type { Project } from "./types";

// Stack Icons
import ThreejsIcon from "@/assets/textures/projects/threejs.svg";
import MediapipeIcon from "@/assets/textures/projects/mediapipe.svg";
import ElectronIcon from "@/assets/textures/projects/electron.svg";

// Link Icons
import GithubIcon from "@/assets/textures/projects/github.svg";
import DownloadIcon from "@/assets/textures/projects/download.svg";

// Images
import InfiniteVoid from "@/assets/projects/satoru/infinite.png";
import Shrine from "@/assets/projects/satoru/shrine.png";
import Kon from "@/assets/projects/satoru/kon.png";
import Purple from "@/assets/projects/satoru/purple.png";


const satoru: Project = {
  id: "satoru",
  title: "Satoru Desktop App",
  subtitle: "Anime hand gesture visualizer",
  stack: [
    { label: "Three.js", icon: ThreejsIcon },
    { label: "MediaPipe", icon: MediapipeIcon },
    { label: "Electron", icon: ElectronIcon },
  ],
  year: 2026,
  tag: "Project",
  links: [
    {
      label: "GitHub",
      link: "https://github.com/chengxi600/satoru-desktop",
      icon: GithubIcon,
    },
    {
      label: "Download",
      link: "https://github.com/chengxi600/satoru-desktop/releases/tag/v1.1.0",
      icon: DownloadIcon,
    },
  ],
  details: {
    description: "test",
  },
  gallery: [
    {
      id: "satoru-1",
      url: InfiniteVoid,
      title: "Infinite Void",
    },
    {
      id: "satoru-2",
      url: Shrine,
      title: "Shrine",
    },
    {
      id: "satoru-3",
      url: Kon,
      title: "Kon",
    },
    {
      id: "satoru-4",
      url: Purple,
      title: "Purple",
    },
  ],
};

export default satoru;
