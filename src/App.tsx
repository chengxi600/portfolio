import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProjectsView from "./views/ProjectsView";
import MenuView from "./views/MenuView";
import ErrorView from "./views/ErrorView";
import { useMediaQuery } from "@mui/material";

function App() {

  const isMobile = useMediaQuery("(max-width: 1024px)");

  if (isMobile) {
    return <ErrorView />;
  }

  return (
    <Routes>
      <Route path="/" element={<MenuView />} />
      <Route path="/projects" element={<ProjectsView />} />
    </Routes>
  );
}

export default App;
