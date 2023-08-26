import { CarouselItemProps } from "../../types";
import { SkillsIcon } from "../SkillsIcon";
import "./CarouselItem.scss";

const CarouselItem = (props: CarouselItemProps) => {
  return (
    <div className="project_wrapper">
      <div className="imageBox">
        <img src={props.imgSrc} alt="aaa" />
      </div>
      <h1 className="project_title">{props.name}</h1>

      <div className="skills_wrapper">
        <h2 className="project_title">Skils</h2>
        <ul className="skills_list project_content">
          {props.skills.map((skillName) => (
            <li>
              <SkillsIcon name={skillName} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <h2 className="project_title">Overview</h2>
          <p className="project_content">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
