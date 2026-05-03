import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import type { TechIcon } from "../../data/projects";
import type { Project } from "../../data/projects";
import "./ProjectDetailTabs.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function ProjectDetailTabs({ project }: { project: Project }) {
  const [infoTabIdx, setInfoTabIdx] = useState<number>(0);

  function handleChangeTab(_event: React.SyntheticEvent, newValue: number) {
    setInfoTabIdx(newValue);
  }

  return (
    <>
      <Box className="osuProjectDetailTabs">
        <Tabs value={infoTabIdx} onChange={handleChangeTab} aria-label="info tab">
          <Tab label="Tech Stack" />
          <Tab label="Description" />
        </Tabs>
        <InfoTab value={infoTabIdx} index={0}>
          <ProjectTechStack stack={project.stack} />
        </InfoTab>
        <InfoTab value={infoTabIdx} index={1}>
          {project.details.description}
        </InfoTab>
      </Box>
    </>
  );
}

function InfoTab(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className="osuProjectDetailTabs__panel">{children}</Box>}
    </div>
  );
}

function ProjectTechStack({ stack }: { stack: TechIcon[] }) {
  return (
    <div className="osuProjectTechStack">
      {stack.map((techIcon) => (
        <div key={techIcon.label} className="osuProjectTechStack__item">
          <img className="osuProjectTechStack__icon" src={techIcon.icon} alt="" />
          <span className="osuProjectTechStack__label">{techIcon.label}</span>
        </div>
      ))}
    </div>
  );
}
