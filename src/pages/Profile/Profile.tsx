import { Email, LinkedIn, GitHub } from "@material-ui/icons";
import { Grid, Link } from "@mui/material";
import "./Profile.scss";

const Profile = () => {
  return (
    <Grid container rowGap={7} className="profile_wrapper">
      <Grid container xs={7} sm={4} md={4} flexDirection="row">
        <Grid container>
          <img
            style={{
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
            }}
            height="150px"
            width="150px"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
          />
        </Grid>
        <Grid
          container
          justifyContent="center"
          width="150px"
          className="contact_wrapper"
        >
          <Grid item>
            <Link
              href="https://github.com/anbyjap"
              className="contact_content"
              color="inherit"
            >
              <Email className="icon" />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://github.com/anbyjap"
              className="contact_content"
              color="inherit"
            >
              <GitHub className="icon" />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.linkedin.com/in/haruki-ambai-76a66025b/"
              className="contact_content"
              color="inherit"
            >
              <LinkedIn className="icon" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container columnSpacing={1} rowGap={3} xs={9} sm={8} md={8}>
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

      <Grid container rowGap={3} className="personal_wrapper">
        <p className="profile_title">Experience</p>
        <ul className="profile_list">
          <li>+ 1 year React Web Development</li>
          <li>
            + 1 year AWS Development
            <br />
            (lambda, RDS, API GateWay...)
          </li>
        </ul>
      </Grid>
      <Grid container>
        <Grid item>
          <p className="profile_title">Education</p>
          <p className="profile_content">
            Bachelar of Computer Engeneering, University of Aizu
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
