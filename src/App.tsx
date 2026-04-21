import "./App.css";
import Background from "./assets/background.jpg";
import NavButtonTray from "./components/NavButtonTray";
import type { CSSProperties } from "react";

function App() {
  const menuStyle: CSSProperties = {
    ["--osu-bg-x" as any]: "0px",
    ["--osu-bg-y" as any]: "0px",
  };

  return (
    <div
      className="osuMenu"
      style={menuStyle}
      onPointerMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const intensityPx = 15;
        el.style.setProperty("--osu-bg-x", `${x * intensityPx}px`);
        el.style.setProperty("--osu-bg-y", `${y * intensityPx}px`);
      }}
      onPointerLeave={(e) => {
        const el = e.currentTarget;
        el.style.setProperty("--osu-bg-x", "0px");
        el.style.setProperty("--osu-bg-y", "0px");
      }}
    >
      <div
        className="osuMenu__parallaxBg"
        style={{ backgroundImage: `url(${Background})` }}
        aria-hidden="true"
      />
      <div className="osuMenu__overlay" />
      <div className="osuMenu__content">
        <NavButtonTray />
      </div>
    </div>
  );
}

export default App;
