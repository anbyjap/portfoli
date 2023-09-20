import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
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
  console.log(props);
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
        sx={{ height: 140, padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={props.imgSrc}
        className="media"
        title="green iguana"
      />
      {/* <ImageComponent alt="aaa" imageName={props.imgSrc} /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>

        {props.expanded && (
          <div>
            <Typography variant="body2" color="text.secondary">
              {props.skills.map((skillName) => (
                <SkillsIcon name={skillName} />
              ))}
            </Typography>
            <Typography gutterBottom component="div">
              {props.description}
            </Typography>
          </div>
        )}

        <Accordion
          className="hidden"
          style={{
            boxShadow: "none", // removes shadow
            border: "none", // removes borders
            outline: "none", // removes outlines if any
            backgroundColor: "transparent",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {props.skills.map((skillName) => (
              <SkillsIcon name={skillName} />
            ))}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{props.description}</Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default CarouselItem;
