import "./Contacts.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { Grid, Link } from "@material-ui/core";

const Contacts = () => {
  return (
    <Grid container className="contact_wrapper">
      <Grid item>
        <Link className="contact_content" color="inherit">
          <Email className="icon" />
          <h2>haruru898@gmail.com</h2>
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://github.com/anbyjap"
          className="contact_content"
          color="inherit"
        >
          <GitHubIcon className="icon" />
          <h2>anbyjap</h2>
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://www.linkedin.com/in/haruki-ambai-76a66025b/"
          className="contact_content"
          color="inherit"
        >
          <LinkedIn className="icon" />
          <h2>Haruki Ambai</h2>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Contacts;
