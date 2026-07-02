export function Header({ name, tagline }: { name: string; tagline: string | undefined }) {
  return (
    <div className="cv-header">
      <div className="title">{name}</div>
      {tagline && <div className="tagline">{tagline}</div>}
    </div>
  );
}
