import ProjectCard from "./ProjectCard";
import ProjectsData from "./ProjectsData";
import { Carousel } from "react-responsive-carousel";


function CarouselProject () {
  return (
    <Carousel
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
