import Carousel from "react-material-ui-carousel";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import { useState } from "react";
import { CarouselItemProps } from "../../types";
import "./Projects.scss";

const items: CarouselItemProps[] = [
  {
    name: "COIAS",
    description:
      "COIAS, stands for 'Come On! Impacting ASteroid', is aimed to find new star with archive data taken by SUBARU telescope.\nThis is mainly deployed for biginners of cosmology and making it easy to operate.",
    skills: ["React", "TypeScript", "Python", "Mysql", "Docker"],
    imgSrc: "images/coias.jpg",
    link: "https://web-coias.u-aizu.ac.jp/",
  },
  {
    name: "Managing junior high school students",
    description:
      "This is a student management application for teachers of junior high school students, using web and Android devices. web is made in React and typescript for teachers, and students can write test results, class comments, diaries, etc. on their Android devices. The system streamlines the work in the field of education, which used to be done manually.",
    skills: ["React", "Python", "Aws"],
    imgSrc: "images/classroom.jpg",
    link: "",
  },
];

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <Carousel sx={{ width: "100%" }} autoPlay={false}>
      {items.map((item, i) => (
        <CarouselItem
          key={i}
          name={item.name}
          description={item.description}
          skills={item.skills}
          imgSrc={item.imgSrc}
          link={item.link}
          handleImageLoad={handleImageLoad}
          isLoaded={isLoaded}
        />
      ))}
    </Carousel>
  );
};

export default Projects;
