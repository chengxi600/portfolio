import "./ProjectCard.css";

type ProjectTagProps = {
  tag: string;
  style?: React.CSSProperties;
};

export function ProjectTag({ tag, style }: ProjectTagProps) {
  return (
    <div className="osuProjectCard__tag" style={{ ...style }}>
      <span className="osuProjectCard__tag__text">{tag.toUpperCase()}</span>
    </div>
  );
}