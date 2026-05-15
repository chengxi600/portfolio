import type { Project } from "@/data/projects";
import { ProjectTag } from "@/components/projects/ProjectTag";
import "./ProjectDetailsHeader.css";

function ProjectDetailsHeader({ project }: { project: Project }) {
  return (
    <div className="osuProjectDetails__content">
      <ProjectTag tag={project.tag} style={{ fontSize: "0.5rem" }} />
      <h1 className="osuProjectDetails__title">
        {project.title} ({project.year})
      </h1>
      <p className="osuProjectDetails__subtitle">{project.subtitle}</p>
      <div className="osuProjectDetails__links">
        {project.links.map((link) => (
          <a
            key={link.link}
            className="osuProjectDetails__link"
            href={link.link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={link.icon}
              alt=""
              className="osuProjectDetails__linkIcon"
            />
            <span className="osuProjectDetails__linkLabel">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetailsHeader;
