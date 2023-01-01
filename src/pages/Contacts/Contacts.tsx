import "./Contacts.scss";
import emailjs from "@emailjs/browser";
import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";

const Contacts = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAIL_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`,
        e.currentTarget,
        `${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form onSubmit={sendEmail}>
      <Grid container className="contact_wrapper">
        <Grid item sm={6} lg={3}>
          <h2>Name</h2>
          <input type="text" name="user_name" required />
        </Grid>
        <Grid item sm={6} lg={3}>
          <h2>Email</h2>
          <input type="email" name="user_email" required />
        </Grid>
        <Grid item xs={12} className="text_wrapper">
          <h2>Message</h2>
          <textarea required name="message" rows={100} className="text_area" />
        </Grid>
        <Grid container xs={12} justifyContent="flex-end">
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Contacts;
