import { useMemo, useState } from "react";
import { projects, type LinkInfo, type Project } from "../data/projects";

export type ProjectSortKey = "default" | "title" | "year";
export type ProjectTagFilter = Project["tag"] | "All";

export type ProjectListItem =
  | {
      type: "project";
      id: string;
      project: Project;
    }
  | {
      type: "link";
      id: string;
      parentId: string;
      linkInfo: LinkInfo;
    };

type UseProjectListOptions = {
  initialSortKey?: ProjectSortKey;
  initialTagFilter?: ProjectTagFilter;
};

function useProjectList({
  initialSortKey = "default",
  initialTagFilter = "All",
}: UseProjectListOptions = {}) {
  const [sortKey, setSortKey] = useState<ProjectSortKey>(initialSortKey);
  const [tagFilter, setTagFilter] = useState<ProjectTagFilter>(initialTagFilter);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    projects[0]?.id ?? null,
  );

  const items = useMemo<ProjectListItem[]>(() => {
    let next = [...projects];

    if (tagFilter !== "All") {
      next = next.filter((project) => project.tag === tagFilter);
    }

    if (sortKey === "title") {
      next.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortKey === "year") {
      next.sort((a, b) => b.year - a.year);
    }

    const expandedId = next.some((project) => project.id === expandedProjectId)
      ? expandedProjectId
      : null;

    return next.flatMap((project) => {
      const rows: ProjectListItem[] = [
        {
          type: "project",
          id: project.id,
          project,
        },
      ];

      if (expandedId === project.id) {
        project.links.forEach((link) => {
          rows.push({
            type: "link",
            id: `${project.id}-${link.label}`,
            parentId: project.id,
            linkInfo: link,
          });
        });
      }
      return rows;
    });
  }, [expandedProjectId, sortKey, tagFilter]);

  return {
    items,
    expandedProjectId,
    setExpandedProjectId,
    sortKey,
    setSortKey,
    tagFilter,
    setTagFilter,
  };
}

export default useProjectList;
