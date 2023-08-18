import { Email, LinkedIn, GitHub } from "@material-ui/icons";
import { Link } from "@mui/material";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile_wrapper">
      <div className="photo_wrapper">
        <img alt="self_photo" src="/images/faceimage.png" />
      </div>
      <div className="introduction_wrapper">
        <div>
          <h1>
            Hello! I'm <span>Web Developer</span>
          </h1>
          <br />
          <h3>with 3+ years experience</h3>
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
