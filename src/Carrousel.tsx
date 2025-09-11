import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  isOpen: boolean;
  onClose: () => void;
}

function CarouselProject({ isOpen, onClose }: CarouselProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="box-carousel">
     <button className="on-close" onClick={onClose}>
        X
      </button>
    <Carousel
      className="my-carousel"
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      emulateTouch={true}
    >
      {ProjectsData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          images={project.images}
        />
      ))}
    </Carousel>
    </div>
  );
}

export default CarouselProject;
