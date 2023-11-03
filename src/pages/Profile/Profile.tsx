import { Email, LinkedIn, GitHub } from "@material-ui/icons";
import { Link } from "@mui/material";
import selfPhoto from "../../images/faceimage.png";
import "./Profile.scss";
import { SkillsIcon } from "../../components/SkillsIcon";
import { useState } from "react";

const images = [
  <SkillsIcon name="React" size={50} />,
  <SkillsIcon name="TypeScript" size={50} />,
  <SkillsIcon name="Python" size={50} />,
  <SkillsIcon name="Docker" size={50} />,
];

const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = isHovered
    ? {
        transform: "scale(1.1)", // Example hover style
        transition: "transform 0.3s",
      }
    : {};
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
                {images.map((i, index) => {
                  return (
                    <button
                      key={index}
                      className="skill-button"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        width: "30rem",
                        // For the gap, you will need to apply margin inline or handle in CSS
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {i}
                    </button>
                  );
                })}
                {images.map((i, index) => {
                  return (
                    <button
                      key={index}
                      className="skill-button"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        width: "30rem",
                        // For the gap, you will need to apply margin inline or handle in CSS
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {i}
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
