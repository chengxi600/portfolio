import "./ProjectTag.css";

type ProjectTagProps = {
  tag: string;
  style?: React.CSSProperties;
};

export function ProjectTag({ tag, style }: ProjectTagProps) {
  return (
    <div className="osuProjectTag" style={{ ...style }}>
      <span className="osuProjectTag__text">{tag.toUpperCase()}</span>
    </div>
  );
}