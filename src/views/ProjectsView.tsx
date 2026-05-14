import "./ProjectsView.css";
import ProjectWheel from "../components/projects/wheel/ProjectWheel";
import useProjectList from "../hooks/useProjectList";
import ProjectDetails from "../components/projects/details/ProjectDetails";

function ProjectsView() {
  const { items, expandedProjectId, setExpandedProjectId, selectedProject } =
    useProjectList();

  return (
    <div className="osuProjectsView">
      <div className="osuProjectsDetailsSlot">
        <ProjectDetails project={selectedProject} />
      </div>
      <ProjectWheel
        items={items}
        expandedProjectId={expandedProjectId}
        setExpandedProjectId={setExpandedProjectId}
      />
    </div>
  );
}

export default ProjectsView;
