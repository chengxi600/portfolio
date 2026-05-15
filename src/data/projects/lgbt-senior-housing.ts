import ClerkIcon from "@/assets/textures/projects/clerk.svg";
import ReactIcon from "@/assets/textures/projects/react.svg";
import TsIcon from "@/assets/textures/projects/ts.svg";
import WebsiteIcon from "@/assets/textures/projects/website.svg";
import type { Project } from "./types";

const lgbtSeniorHousing: Project = {
  id: "lgbt-senior-housing",
  title: "LGBT Senior Housing",
  subtitle:
    "Website for The Pryde, a LGBT senior housing community in Boston",
  stack: [
    { label: "Clerk", icon: ClerkIcon },
    { label: "React", icon: ReactIcon },
    { label: "Typescript", icon: TsIcon },
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
    description: "test",
  },
  gallery: [
    {
      id: "lgbt-1",
      url: "https://images.unsplash.com/photo-1761882725885-d3d8bd2032d1?auto=format&fit=crop&q=80&w=687",
      title: "Homepage",
    },
    {
      id: "lgbt-2",
      url: "https://images.unsplash.com/photo-1661980494567-40a5e01b699b?auto=format&fit=crop&q=80&w=685",
      title: "Community Dashboard",
    },
    {
      id: "lgbt-3",
      url: "https://images.unsplash.com/photo-1761775915848-467e41c1c4db?auto=format&fit=crop&q=80&w=689",
      title: "Events Page",
    },
    {
      id: "lgbt-4",
      url: "https://images.unsplash.com/photo-1761882835101-02ab45ac0726?auto=format&fit=crop&q=80&w=690",
      title: "Resource Directory",
    },
    {
      id: "lgbt-5",
      url: "https://images.unsplash.com/photo-1761078980679-e89e25fe279b?auto=format&fit=crop&q=80&w=687",
      title: "Contact Form",
    },
  ],
};

export default lgbtSeniorHousing;
