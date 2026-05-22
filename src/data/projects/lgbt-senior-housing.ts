import type { Project } from "./types";

// Stack Icons
import ClerkIcon from "@/assets/textures/projects/clerk.svg";
import ReactIcon from "@/assets/textures/projects/react.svg";
import TsIcon from "@/assets/textures/projects/ts.svg";
import NeonIcon from "@/assets/textures/projects/neon.svg";
import VercelIcon from "@/assets/textures/projects/vercel.svg";

// Link Icons
import WebsiteIcon from "@/assets/textures/projects/website.svg";

// Images
import Homepage from "@/assets/projects/lgbt-senior-housing/home.png";
import Gallery from "@/assets/projects/lgbt-senior-housing/gallery.png";
import RequestForm from "@/assets/projects/lgbt-senior-housing/request.png";
import Team from "@/assets/projects/lgbt-senior-housing/team.png";
import Payload from "@/assets/projects/lgbt-senior-housing/payload.png";
import CMS from "@/assets/projects/lgbt-senior-housing/cms.png";

const lgbtSeniorHousing: Project = {
  id: "lgbt-senior-housing",
  title: "LGBT Senior Housing",
  subtitle:
    "Website for The Pryde, a LGBT senior housing community in Boston",
  stack: [
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
    { label: "Clerk", icon: ClerkIcon },
    { label: "NeonDB", icon: NeonIcon },
    { label: "Vercel", icon: VercelIcon },
  ],
  year: 2025,
  tag: "Project",
  links: [
    {
      label: "Website",
      link: "https://lgbtq-senior-housing.vercel.app/",
      icon: WebsiteIcon,
    },
  ],
  details: {
    description: "Picked up this project from the Tuft's club JumboCode for the summer. Worked with a friend over summer and did contracted work to finish up this project. Mainly implemented a Content Management System to provide a no-code interface for admins to edit content.",
  },
  gallery: [
    {
      id: "lgbt-1",
      url: Homepage,
      title: "Homepage",
    },
    {
      id: "lgbt-2",
      url: Gallery,
      title: "Gallery",
    },
    {
      id: "lgbt-3",
      url: RequestForm,
      title: "Request Form",
    },
    {
      id: "lgbt-4",
      url: Team,
      title: "Team",
    },
    {
      id: "lgbt-5",
      url: Payload,
      title: "Payload",
    },
    {
      id: "lgbt-6",
      url: CMS,
      title: "CMS",
    },
  ],
};

export default lgbtSeniorHousing;
