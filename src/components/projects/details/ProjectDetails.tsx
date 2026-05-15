import { ProjectDetailTabs } from "./ProjectDetailTabs";
import type { Project } from "@/data/projects";
import ProjectCarousel from "./ProjectCarousel";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import "./ProjectDetails.css";

function ProjectDetails({ project }: { project: Project | null }) {
  if (!project) {
    return null;
  }
  return (
    <div className="osuProjectsDetails">
      <ProjectCarousel items={project.gallery} />
      <ProjectDetailsHeader project={project} />
      <ProjectDetailTabs project={project} />
    </div>
  );
}

export default ProjectDetails;
