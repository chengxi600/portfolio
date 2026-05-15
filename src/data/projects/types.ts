export type ProjectTag = "Project" | "Research" | "Open Source";

export type LinkInfo = {
  label: string;
  link: string;
  icon: string;
};

export type TechIcon = {
  icon: string;
  label: string;
};

export type GalleryItem = {
  id: string;
  url: string;
  title: string;
};

export type ProjectDetails = {
  description: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  stack: TechIcon[];
  year: number;
  tag: ProjectTag;
  links: LinkInfo[];
  details: ProjectDetails;
  gallery: GalleryItem[];
};
