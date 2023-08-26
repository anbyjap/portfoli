import { CarouselItemProps } from "../../types";
import { SkillsIcon } from "../SkillsIcon";
import "./CarouselItem.scss";

interface NewCarouselItemProps extends CarouselItemProps {
  handleImageLoad: () => void;
  isLoaded: boolean;
}

const CarouselItem = (props: NewCarouselItemProps) => {
  return (
    <div className="project_wrapper">
      <div className="imageBox">
        <img
          src={props.imgSrc}
          onLoad={() => props.handleImageLoad()}
          alt="aaa"
        />
      </div>
      <p className="project_title">{props.name}</p>

      <div className="skills_wrapper">
        <div className="skills_list">
          {props.skills.map((skillName) => (
            <SkillsIcon name={skillName} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="project_title">Overview</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
