import "./CarouselItem.scss";

interface CarouselItemProps {
  name: string;
  skills: Array<string>;
  description: string;
  imgSrc: string;
  link: string;
}

const CarouselItem = (props: CarouselItemProps) => {
  return (
    <div className="project_wrapper">
      <div>
        <img height="30%" width="100%" src={props.imgSrc} />
      </div>
      <div>
        <h1 className="project_title">{props.name}</h1>
      </div>

      <div className="skills_wrapper">
        <h2 className="project_title">Skils</h2>
        <ul className="skills_list project_content">
          {props.skills.map((skill) => (
            <li>{skill}</li>
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
