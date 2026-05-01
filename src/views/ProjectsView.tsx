import "./ProjectsView.css";
import ProjectWheel from "../components/projects/ProjectWheel";
import useProjectList from "../hooks/useProjectList";
import ProjectDetails from "../components/projects/ProjectDetails";

function ProjectsView() {
  const { items, expandedProjectId, setExpandedProjectId, selectedProject } =
    useProjectList();

  return (
    <div className="osuProjectsView">
      <ProjectDetails project={selectedProject} />}
      <ProjectWheel
        items={items}
        expandedProjectId={expandedProjectId}
        setExpandedProjectId={setExpandedProjectId}
      />
    </div>
  );
}

export default ProjectsView;
