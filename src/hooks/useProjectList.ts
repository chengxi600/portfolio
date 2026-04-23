import { useMemo, useState } from "react";
import { projects, type Project } from "../data/projects";

export type ProjectSortKey = "default" | "title" | "year";
export type ProjectTagFilter = Project["tag"] | "All";

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

  const items = useMemo(() => {
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

    return next;
  }, [sortKey, tagFilter]);

  return {
    items,
    sortKey,
    setSortKey,
    tagFilter,
    setTagFilter,
  };
}

export default useProjectList;
