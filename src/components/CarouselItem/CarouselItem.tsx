import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CarouselItemProps } from "../../types";
import { SkillsIcon } from "../SkillsIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./CarouselItem.scss";

interface NewCarouselItemProps extends CarouselItemProps {
  onExpand: () => void;
  expanded: boolean;
  hidden: boolean;
  expandedItemIndex: null | number;
}

const CarouselItem = (props: NewCarouselItemProps) => {
  const className = props.expanded
    ? "card expanded"
    : props.hidden
    ? "card hidden"
    : "card";

  return (
    <Card
      sx={{ display: "block" }}
      onClick={props.onExpand}
      className={className}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={props.imgSrc}
        className="media"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.skills.map((skillName) => (
            <SkillsIcon name={skillName} />
          ))}
        </Typography>

        {props.expanded && (
          <Typography gutterBottom component="div">
            {props.description}
          </Typography>
        )}

        <Accordion className="hidden">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          ></AccordionSummary>
          <AccordionDetails>
            <Typography>{props.description}</Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default CarouselItem;
