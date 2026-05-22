import type { Project } from "./types";

// Stack Icons
import ReactIcon from "@/assets/textures/projects/react.svg";
import TsIcon from "@/assets/textures/projects/ts.svg";
import ClerkIcon from "@/assets/textures/projects/clerk.svg";
import NeonIcon from "@/assets/textures/projects/neon.svg";
import KotlinIcon from "@/assets/textures/projects/kotlin.svg";
import GAIcon from "@/assets/textures/projects/ga.svg";

// Link Icons
import GithubIcon from "@/assets/textures/projects/github.svg";
import WebsiteIcon from "@/assets/textures/projects/website.svg";

// Images
import Home from "@/assets/projects/fillyb/home.png";
import Event from "@/assets/projects/fillyb/event.png";
import Leaderboard from "@/assets/projects/fillyb/leaderboard.png";
import Portfolio from "@/assets/projects/fillyb/portfolio.png";
import History from "@/assets/projects/fillyb/history.png";
import Admin from "@/assets/projects/fillyb/admin.png";

const fillybExchange: Project = {
  id: "fillyb-exchange",
  title: "FillyB Exchange",
  subtitle: "Fake betting website for amateur esports leagues",
  stack: [
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
    { label: "Kotlin", icon: KotlinIcon },
    { label: "Clerk", icon: ClerkIcon },
    { label: "NeonDB", icon: NeonIcon },
    { label: "Google Analytics", icon: GAIcon },
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
    description: "Fake esports betting site using a parimutuel betting system similar to Twitch points. Our website serviced 3 different leagues with around 50 account signups and 100+ unique users. Main features are betting on events, leaderboard, portfolio, history, and admin page.",
  },
  gallery: [
    {
      id: "fillyb-1",
      url: Home,
      title: "Home",
    },
    {
      id: "fillyb-2",
      url: Event,
      title: "Event Details",
    },
    {
      id: "fillyb-3",
      url: Leaderboard,
      title: "Leaderboard View",
    },
    {
      id: "fillyb-4",
      url: Portfolio,
      title: "Portfolio View",
    },
    {
      id: "fillyb-5",
      url: History,
      title: "Event History",
    },
    {
      id: "fillyb-6",
      url: Admin,
      title: "Admin Page",
    },
  ],
};

export default fillybExchange;
