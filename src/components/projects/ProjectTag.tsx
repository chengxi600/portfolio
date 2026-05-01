import "./ProjectCard.css";

export function ProjectTag({ tag }: { tag: string }) {
  return (
    <div className="osuProjectCard__tag">
      <span className="osuProjectCard__tag__text">{tag.toUpperCase()}</span>
    </div>
  );
}