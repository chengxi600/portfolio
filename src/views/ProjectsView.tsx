import "./ProjectsView.css";
import ProjectWheel from "../components/projects/wheel/ProjectWheel";
import useProjectList from "../hooks/useProjectList";
import ProjectDetails from "../components/projects/details/ProjectDetails";
import BackButton from "../components/projects/details/BackButton";
import { useNavigate } from "react-router-dom";

function ProjectsView() {
  const { items, expandedProjectId, setExpandedProjectId, selectedProject } =
    useProjectList();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    setExpandedProjectId(null);
    navigate("/");
  };

  return (
    <div className="osuProjectsView">
      <div className="osuProjectsDetailsSlot">
        <ProjectDetails project={selectedProject} />
        {selectedProject && (
          <BackButton onClick={handleBackButtonClick} />
        )}
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
