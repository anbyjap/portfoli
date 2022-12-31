import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import "./CarouselItem.scss";

interface CarouselItemProps {
  name: string;
  skills: Array<string>;
  description: string;
}

const CarouselItem = (props: CarouselItemProps) => {
  return (
    <Paper sx={{ backgroundColor: "transparent" }}>
      <Grid container rowGap={7} className="project_wrapper">
        <Grid container xs={4} sm={4} md={4}>
          <img
            style={{ borderRadius: "50%" }}
            height="130px"
            width="130px"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
          />
        </Grid>
        <Grid container rowGap={3} xs={9} sm={8} md={8}>
          <h1 className="project_title">{props.name}</h1>
        </Grid>

        <Grid container rowGap={3} className="skills_wrapper">
          <h2 className="project_title">Skils</h2>
          <ul className="skills_list project_content">
            {props.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </Grid>
        <Grid container>
          <Grid item>
            <h2 className="project_title">Overview</h2>
            <p className="project_content">
              COIAS, stands for "Come On! Impacting ASteroid", is aimed to find
              new star with archive data taken by SUBARU telescope.
              <br />
              This is mainly for biginners of cosmology and making it easy to
              operate.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CarouselItem;
