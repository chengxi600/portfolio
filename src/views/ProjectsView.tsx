import type { CSSProperties } from "react";
import "./ProjectsView.css";
import ProjectWheel from "@/components/projects/wheel/ProjectWheel";
import ProjectFilterBar from "@/components/projects/wheel/ProjectFilterBar";
import useProjectList from "@/hooks/useProjectList";
import ProjectDetails from "@/components/projects/details/ProjectDetails";
import BackButton from "@/components/projects/details/BackButton";
import { useNavigate } from "react-router-dom";

type ProjectsViewStyle = CSSProperties & { ["--osu-projects-bg"]?: string };

function ProjectsView() {
  const {
    items,
    matchCount,
    expandedProjectId,
    setExpandedProjectId,
    selectedProject,
    sortKey,
    setSortKey,
    tagFilter,
    setTagFilter,
    stackFilter,
    setStackFilter,
    searchQuery,
    setSearchQuery,
    availableStacks,
  } = useProjectList();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    setExpandedProjectId(null);
    navigate("/");
  };

  const backgroundUrl = selectedProject?.gallery[0]?.url;
  const viewStyle: ProjectsViewStyle | undefined = backgroundUrl
    ? { "--osu-projects-bg": `url("${backgroundUrl}")` }
    : undefined;

  return (
    <div className="osuProjectsView" style={viewStyle}>
      <div className="osuProjectsDetailsSlot">
        <ProjectDetails project={selectedProject} />
        {selectedProject && (
          <BackButton onClick={handleBackButtonClick} />
        )}
      </div>
      <div className="osuProjectsWheelColumn">
        <ProjectFilterBar
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          sortKey={sortKey}
          onSortKeyChange={setSortKey}
          tagFilter={tagFilter}
          onTagFilterChange={setTagFilter}
          stackFilter={stackFilter}
          onStackFilterChange={setStackFilter}
          availableStacks={availableStacks}
          matchCount={matchCount}
        />
        <ProjectWheel
          items={items}
          expandedProjectId={expandedProjectId}
          setExpandedProjectId={setExpandedProjectId}
        />
      </div>
    </div>
  );
}

export default ProjectsView;
