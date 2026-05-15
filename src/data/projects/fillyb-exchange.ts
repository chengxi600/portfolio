import ClerkIcon from "@/assets/textures/projects/clerk.svg";
import ReactIcon from "@/assets/textures/projects/react.svg";
import TsIcon from "@/assets/textures/projects/ts.svg";
import GithubIcon from "@/assets/textures/projects/github.svg";
import WebsiteIcon from "@/assets/textures/projects/website.svg";
import type { Project } from "./types";

const fillybExchange: Project = {
  id: "fillyb-exchange",
  title: "FillyB Exchange",
  subtitle: "Fake betting website for amateur esports leagues",
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
      link: "https://github.com/OtakuExchange",
      icon: GithubIcon,
    },
    {
      label: "Website",
      link: "https://fillybexchange.vercel.app/",
      icon: WebsiteIcon,
    },
  ],
  details: {
    description: "test",
  },
  gallery: [
    {
      id: "fillyb-1",
      url: "https://images.unsplash.com/photo-1761882725885-d3d8bd2032d1?auto=format&fit=crop&q=80&w=687",
      title: "Betting Dashboard",
    },
    {
      id: "fillyb-2",
      url: "https://images.unsplash.com/photo-1760389005000-bf02bf24f463?auto=format&fit=crop&q=80&w=1123",
      title: "Match Odds",
    },
    {
      id: "fillyb-3",
      url: "https://images.unsplash.com/photo-1761165307495-56bd564d322f?auto=format&fit=crop&q=80&w=663",
      title: "Leaderboard",
    },
    {
      id: "fillyb-4",
      url: "https://images.unsplash.com/photo-1572851899646-a1f69c664e1e?auto=format&fit=crop&q=80&w=1170",
      title: "User Profile",
    },
    {
      id: "fillyb-5",
      url: "https://images.unsplash.com/photo-1661980494567-40a5e01b699b?auto=format&fit=crop&q=80&w=685",
      title: "Live Match View",
    },
    {
      id: "fillyb-6",
      url: "https://images.unsplash.com/photo-1756299792672-157811bf1005?auto=format&fit=crop&q=80&w=1074",
      title: "Transaction History",
    },
  ],
};

export default fillybExchange;
