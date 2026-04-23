import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProjectsView from "./views/ProjectsView";
import MenuView from "./views/MenuView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuView />} />
      <Route path="/projects" element={<ProjectsView />} />
    </Routes>
  );
}

export default App;
