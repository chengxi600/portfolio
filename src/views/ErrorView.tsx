import Background from "@/assets/textures/menu/background.jpg";
import type { CSSProperties } from "react";
import "./MenuView.css";
import ErrorAvatar from "@/assets/textures/menu/avatar-guest.png";

function ErrorView() {
  const menuStyle: CSSProperties = {
    ["--osu-bg-x" as string]: "0px",
    ["--osu-bg-y" as string]: "0px",
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

        const intensityPx = 24;
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
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
          <img src={ErrorAvatar} alt="Error Avatar" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
          <h1 style={{ color: "white" }}>Sorry!</h1>
          <p>This page does not support mobile devices yet.</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorView;