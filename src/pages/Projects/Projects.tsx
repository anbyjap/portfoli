import Carousel from "react-material-ui-carousel";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import "./Projects.scss";

const items = [
  {
    name: "COIAS",
    description:
      "COIAS, stands for 'Come On! Impacting ASteroid', is aimed to find new star with archive data taken by SUBARU telescope.\nThis is mainly deployed for biginners of cosmology and making it easy to operate.",
    skills: ["React", "Fast API (Python)"],
    imgSrc: "https://web-coias.u-aizu.ac.jp/ogp.jpg",
    link: "https://web-coias.u-aizu.ac.jp/",
  },
  {
    name: "Hello",
    description: "Hello World!",
    skills: ["React", "Fast API (Python)"],
    imgSrc: "",
    link: "",
  },
];

const Profile = () => {
  return (
    <Carousel sx={{ width: "100%", height: "70%" }} autoPlay={false}>
      {items.map((item, i) => (
        <CarouselItem
          key={i}
          name={item.name}
          description={item.description}
          skills={item.skills}
          imgSrc={item.imgSrc}
          link={item.link}
        />
      ))}
    </Carousel>
  );
};

export default Profile;
