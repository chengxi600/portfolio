import ClerkIcon from "../../assets/textures/projects/clerk.svg";
import ReactIcon from "../../assets/textures/projects/react.svg";
import TsIcon from "../../assets/textures/projects/ts.svg";
import GithubIcon from "../../assets/textures/projects/github.svg";
import DownloadIcon from "../../assets/textures/projects/download.svg";
import type { Project } from "./types";

const satoru: Project = {
  id: "satoru",
  title: "Satoru Desktop App",
  subtitle: "Anime hand gesture visualizer",
  stack: [
    { label: "Clerk", icon: ClerkIcon },
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
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
      url: "https://images.unsplash.com/photo-1761775915848-467e41c1c4db?auto=format&fit=crop&q=80&w=689",
      title: "Gesture Detection",
    },
    {
      id: "satoru-2",
      url: "https://images.unsplash.com/photo-1761882835101-02ab45ac0726?auto=format&fit=crop&q=80&w=690",
      title: "Overlay Rendering",
    },
  ],
};

export default satoru;
