import Carousel from "react-material-ui-carousel";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import "./Projects.scss";

const items = [
  {
    name: "COIAS",
    description:
      "COIAS, stands for 'Come On! Impacting ASteroid', is aimed to find new star with archive data taken by SUBARU telescope. <br /> This is mainly deployed for biginners of cosmology and making it easy to operate.",
    skills: ["React", "Fast API (Python)"],
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    skills: ["React", "Fast API (Python)"],
  },
];

const Profile = () => {
  return (
    <Carousel autoPlay={false} height="80%">
      {items.map((item, i) => (
        <CarouselItem
          key={i}
          name={item.name}
          description={item.description}
          skills={item.skills}
        />
      ))}
    </Carousel>
  );
};

export default Profile;
