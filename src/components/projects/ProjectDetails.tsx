import ProjectImage from "../../assets/textures/projects/details/fillyb-pic.png";
import { ProjectTag } from "./ProjectTag";
import { ProjectDetailTabs } from "./ProjectDetailTabs";
import type { Project } from "../../data/projects";

function ProjectDetails({ project }: { project: Project | null }) {
  if (!project) {
    return null;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* Replace with framer motion carousel later */}
      <img
        src={ProjectImage}
        style={{ width: "40vw", height: "auto" }}
        alt="FillyB Exchange"
        draggable={false}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "red",
        }}
      >
        <ProjectTag tag={project.tag} />
        <h1>
          {project.title} ({project.year})
        </h1>
        <p>{project.subtitle}</p>
        <ProjectDetailTabs project={project} />
      </div>
    </div>
  );
}

export default ProjectDetails;
