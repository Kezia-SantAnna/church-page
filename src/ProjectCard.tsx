interface CardProps {
  title: string;
  description: string;
  images: string[];
}

function ProjectCard({ title, description, images }: CardProps) {
  return (
    <article className="project-card">
      <div className="box-project">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
       <div className="box-imgs">
        {images.map((src) => (
          <img className="images-proj" src={src} />
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
