import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";
import type {
  ProjectSortKey,
  ProjectTagFilter,
  ProjectStackFilter,
} from "../../../hooks/useProjectList";
import "./ProjectFilterBar.css";

const TAG_OPTIONS: ProjectTagFilter[] = ["All", "Project", "Research", "Open Source"];
const SORT_OPTIONS: { value: ProjectSortKey; label: string }[] = [
  { value: "default", label: "None" },
  { value: "title", label: "Title" },
  { value: "year", label: "Year" },
];

const menuPaperSx = {
  bgcolor: "rgba(30, 30, 30, 0.95)",
  color: "#fff",
  borderRadius: "8px",
  mt: "4px",
  "& .MuiMenuItem-root": {
    fontSize: "0.75rem",
  },
  "& .MuiMenuItem-root:hover": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
  "& .MuiMenuItem-root.Mui-selected": {
    bgcolor: "rgba(255, 255, 255, 0.12)",
  },
} as const;

type ProjectFilterBarProps = {
  searchQuery: string;
  onSearchQueryChange: (q: string) => void;
  sortKey: ProjectSortKey;
  onSortKeyChange: (k: ProjectSortKey) => void;
  tagFilter: ProjectTagFilter;
  onTagFilterChange: (t: ProjectTagFilter) => void;
  stackFilter: ProjectStackFilter;
  onStackFilterChange: (s: ProjectStackFilter) => void;
  availableStacks: readonly string[];
  matchCount: number;
};

function ProjectFilterBar({
  searchQuery,
  onSearchQueryChange,
  sortKey,
  onSortKeyChange,
  tagFilter,
  onTagFilterChange,
  stackFilter,
  onStackFilterChange,
  availableStacks,
  matchCount,
}: ProjectFilterBarProps) {
  return (
    <div className="osuFilterBar">
      <div className="osuFilterBar__searchRow">
        <div className="osuFilterBar__searchWrap">
          <input
            type="text"
            className="osuFilterBar__searchInput"
            placeholder="search..."
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
          />
          <SearchIcon className="osuFilterBar__searchIcon" />
        </div>
        <span className="osuFilterBar__matchCount">
          {matchCount} matches
        </span>
      </div>

      <div className="osuFilterBar__filtersRow">
        <FilterDropdown
          label="Sort"
          value={sortKey}
          onChange={(e) => onSortKeyChange(e.target.value as ProjectSortKey)}
        >
          {SORT_OPTIONS.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </FilterDropdown>

        <FilterDropdown
          label="Tag"
          value={tagFilter}
          onChange={(e) => onTagFilterChange(e.target.value as ProjectTagFilter)}
        >
          {TAG_OPTIONS.map((tag) => (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </FilterDropdown>

        <FilterDropdown
          label="Stack"
          value={stackFilter}
          onChange={(e) => onStackFilterChange(e.target.value as ProjectStackFilter)}
        >
          <MenuItem value="All">All</MenuItem>
          {availableStacks.map((stack) => (
            <MenuItem key={stack} value={stack}>
              {stack}
            </MenuItem>
          ))}
        </FilterDropdown>
      </div>
    </div>
  );
}

function FilterDropdown({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="osuFilterBar__dropdown">
      <span className="osuFilterBar__dropdownLabel">{label}</span>
      <Select
        value={value}
        onChange={onChange}
        size="small"
        className="osuFilterBar__select"
        MenuProps={{ slotProps: { paper: { sx: menuPaperSx } } }}
        sx={{
          color: "#fff",
          fontSize: "0.75rem",
          "& .MuiSelect-icon": { color: "rgba(255,255,255,0.7)" },
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      >
        {children}
      </Select>
    </div>
  );
}

export default ProjectFilterBar;
