import { Grid } from "@mui/material";
import "./Profile.scss";

const Profile = () => {
  return (
    <Grid container className="profile_wrapper">
      <Grid container sm={9} md={9}>
        <Grid item sm={6} md={6}>
          <p className="profile_title">FirstName</p>
          <p className="profile_content">Haruki</p>
        </Grid>
        <Grid item sm={6} md={6}>
          <p className="profile_title">LastName</p>
          <p className="profile_content">Ambai</p>
        </Grid>
        <Grid item sm={6} md={6}>
          <p className="profile_title">Date of Birth</p>
          <p className="profile_content"> 29/03/2001</p>
        </Grid>
        <Grid item sm={6} md={6}>
          <p className="profile_title">Nationality</p>
          <p className="profile_content"> Japan</p>
        </Grid>
      </Grid>
      <Grid container sm={3} md={3}>
        aaa
      </Grid>
      <Grid container className="personal_wrapper">
        <p className="profile_title">Experience</p>
        <ul className="profile_list">
          <li>+ 1 year of React Web Development</li>
          <li>
            + 1 year of AWS Development
            <br />
            (lambda, RDS, API GateWay...)
          </li>
        </ul>
      </Grid>
      <Grid container>
        <p className="profile_title">Education</p>
        <p className="profile_content">
          Bachelar of Computer Engeneering, University of Aizu
        </p>
      </Grid>
    </Grid>
  );
};

export default Profile;
