import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselProject() {
  return (
    <Carousel
      className="carrossel"
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
  );
}

export default CarouselProject;
