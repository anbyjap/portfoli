import { Email, LinkedIn, GitHub } from "@material-ui/icons";
import { Link } from "@mui/material";
import selfPhoto from "../../images/faceimage.png";
import "./Profile.scss";
import { SkillsIcon } from "../../components/SkillsIcon";
import { useState } from "react";
import { Name } from "../../types";

interface skill {
  name: Name;
  size: number;
  experience: string;
}

const skills: skill[] = [
  { name: "React", size: 50, experience: "2 years" },
  { name: "TypeScript", size: 50, experience: "1.5 years" },
  { name: "Python", size: 50, experience: "4 years" },
  { name: "Docker", size: 50, experience: "2 year" },
  { name: "Mysql", size: 50, experience: "2 years" },
  { name: "PostgreSQL", size: 50, experience: "1 years" },
];

const Profile = () => {
  const [hoveredSkillName, setHoveredSkillName] = useState<string>();

  return (
    <div className="profile_wrapper">
      <div className="photo_wrapper">
        <img alt="aaa" src={selfPhoto} />
      </div>
      <div className="introduction_wrapper fadeInUp">
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "10vh",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "200%",
                height: "5rem",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                className="animate"
                style={{
                  width: "200%",
                  display: "flex",
                  alignItems: "center",
                  height: "5rem",
                  justifyContent: "space-around",
                  position: "absolute",
                  left: 0,
                  // For the animation, you will need to define this in CSS
                  // e.g. animation: 'slide 30s infinite linear'
                }}
              >
                {skills.map((skill, index) => {
                  return (
                    <button
                      key={index}
                      className="skill-button"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30rem",
                      }}
                      onMouseEnter={() =>
                        setHoveredSkillName(`${skill.name}-1`)
                      }
                      onMouseLeave={() => setHoveredSkillName("")}
                    >
                      <SkillsIcon name={skill.name} size={skill.size} />
                      {hoveredSkillName === `${skill.name}-1` && (
                        <span>{skill.experience}</span>
                      )}
                    </button>
                  );
                })}

                {skills.map((skill, index) => {
                  return (
                    <button
                      key={index}
                      className="skill-button"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "30rem",
                      }}
                      onMouseEnter={() =>
                        setHoveredSkillName(`${skill.name}-2`)
                      }
                      onMouseLeave={() => setHoveredSkillName("")}
                    >
                      <SkillsIcon name={skill.name} size={skill.size} />
                      {hoveredSkillName === `${skill.name}-2` && (
                        <span>{skill.experience}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <h1>
            Hello! I'm <span>Full Stack Web Developer</span>
          </h1>
          <h3>with 2+ years experience</h3>
          <div className="icon_list">
            <button className="contact_button">
              <Link
                href="mailto:haruru898@gmail.com"
                className="contact_content"
                color="inherit"
              >
                <Email className="icon" />
              </Link>
            </button>
            <button className="contact_button">
              <Link
                href="https://github.com/anbyjap"
                className="contact_content"
                color="inherit"
              >
                <GitHub className="icon" />
              </Link>
            </button>
            <button className="contact_button">
              <Link
                href="https://www.linkedin.com/in/haruki-ambai-76a66025b/"
                className="contact_content"
                color="inherit"
              >
                <LinkedIn className="icon" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
