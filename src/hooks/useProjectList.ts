import { useMemo, useState } from "react";
import { projects, type LinkInfo, type Project, type ProjectTag } from "@/data/projects";

export type ProjectSortKey = "default" | "title" | "year";
export type ProjectTagFilter = ProjectTag | "All";
export type ProjectStackFilter = string;

export type ProjectItem = {
  type: "project";
  id: string;
  project: Project;
};

export type ProjectLinkItem = {
  type: "link";
  id: string;
  parentId: string;
  linkInfo: LinkInfo;
};

export type ProjectListItem = ProjectItem | ProjectLinkItem;

type UseProjectListOptions = {
  initialSortKey?: ProjectSortKey;
  initialTagFilter?: ProjectTagFilter;
};

const availableStacks: readonly string[] = Array.from(
  new Set(projects.flatMap((p) => p.stack.map((s) => s.label))),
).sort();

function useProjectList({
  initialSortKey = "default",
  initialTagFilter = "All",
}: UseProjectListOptions = {}) {
  const [sortKey, setSortKey] = useState<ProjectSortKey>(initialSortKey);
  const [tagFilter, setTagFilter] =
    useState<ProjectTagFilter>(initialTagFilter);
  const [stackFilter, setStackFilter] =
    useState<ProjectStackFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const initialExpandedProjectId = projects[Math.floor(projects.length/2)-1].id;
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    initialExpandedProjectId,
  );

  const { items, matchCount } = useMemo(() => {
    let next = [...projects];

    if (tagFilter !== "All") {
      next = next.filter((project) => project.tag === tagFilter);
    }

    if (stackFilter !== "All") {
      next = next.filter((project) =>
        project.stack.some((s) => s.label === stackFilter),
      );
    }

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      next = next.filter(
        (project) =>
          project.title.toLowerCase().includes(q) ||
          project.subtitle.toLowerCase().includes(q),
      );
    }

    if (sortKey === "title") {
      next.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortKey === "year") {
      next.sort((a, b) => b.year - a.year);
    }

    const count = next.length;

    const expandedId = next.some((project) => project.id === expandedProjectId)
      ? expandedProjectId
      : null;

    const rows = next.flatMap((project) => {
      const projectRows: ProjectListItem[] = [
        {
          type: "project",
          id: project.id,
          project,
        },
      ];

      if (expandedId === project.id) {
        project.links.forEach((link) => {
          projectRows.push({
            type: "link",
            id: `${project.id}-${link.label}`,
            parentId: project.id,
            linkInfo: link,
          });
        });
      }
      return projectRows;
    });

    return { items: rows, matchCount: count };
  }, [expandedProjectId, sortKey, tagFilter, stackFilter, searchQuery]);

  const selectedProject: Project | null = useMemo(() => {
    const item = items.find(
      (item): item is ProjectItem =>
        item.type === "project" && item.id === expandedProjectId,
    );

    return item ? item.project : null;
  }, [items, expandedProjectId]);

  return {
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
  };
}

export default useProjectList;
