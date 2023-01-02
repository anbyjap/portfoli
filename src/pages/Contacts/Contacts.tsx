import "./Contacts.scss";
import emailjs from "@emailjs/browser";
import { Grid } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Contacts = () => {
  const [isSuccess, setIsSuccess] = useState(false);
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
          setIsSuccess(true);
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
          <TextField
            type="text"
            name="user_name"
            required
            size="small"
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item sm={6} lg={3}>
          <h2>Email</h2>
          <TextField
            type="email"
            name="user_email"
            required
            size="small"
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={12} className="text_wrapper">
          <h2>Message</h2>
          {/*           <textarea required name="message" rows={100} className="text_area" />
           */}
          <TextField
            fullWidth
            multiline
            rows={10}
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
          />
        </Grid>
        <Grid container xs={12} justifyContent="flex-end">
          <Button type="submit" variant="contained" disabled={isSuccess}>
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Contacts;
