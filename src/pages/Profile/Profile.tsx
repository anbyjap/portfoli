import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile_wrapper">
      <h1>Profile</h1>
      <div className="name_wrapper">
        <div>
          <p className="profile_title">FirstName</p>
          <p className="profile_content">Haruki</p>
        </div>
        <div>
          <p className="profile_title">LastName</p>
          <p className="profile_content">Ambai</p>
        </div>
      </div>
      <div className="name_wrapper">
        <div>
          <p className="profile_title">Date of Birth</p>
          <p className="profile_content"> 29/03/2001</p>
        </div>
        <div>
          <p className="profile_title">Nationality</p>
          <p className="profile_content"> Japan</p>
        </div>
      </div>
      <div className="personal_wrapper">
        <div>
          <p className="profile_title">Experience</p>
          <ul className="profile_list">
            <li>+ 1 year of React Web Development</li>
            <li>
              + 1 year of AWS Development
              <br />
              (lambda, RDS, API GateWay...)
            </li>
          </ul>
        </div>
      </div>
      <div className="content_wrapper">
        <div>
          <p className="profile_title">Education</p>
          <p className="profile_content">
            Bachelar of Computer Engeneering, University of Aizu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
