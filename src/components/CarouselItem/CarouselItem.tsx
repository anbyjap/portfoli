import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NewlineText } from "../../components/NewLineText";
import { CarouselItemProps } from "../../types";
import { SkillsIcon } from "../SkillsIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./CarouselItem.scss";

interface NewCarouselItemProps extends CarouselItemProps {
  onExpand: () => void;
  expanded: boolean;
  hidden: boolean;
  expandedItemIndex: null | number;
  windowWidth: number;
}

const CarouselItem = (props: NewCarouselItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Card
      className={`card ${isHovered ? "hovered" : ""}`}
      sx={{ display: "block" }}
      onClick={props.onExpand}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        sx={{ height: 140, padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={props.imgSrc}
        className="media"
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        {props.windowWidth > 768 && (
          <div>
            <Typography variant="body2" color="text.secondary">
              {props.skills.map((skillName) => (
                <SkillsIcon name={skillName} />
              ))}
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
            sx={{ padding: 0 }}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {props.skills.map((skillName) => (
              <SkillsIcon name={skillName} />
            ))}
          </AccordionSummary>
          <AccordionDetails>
            <NewlineText text={props.description} />
          </AccordionDetails>
          {props.link !== "" && (
            <div style={{ display: "flex", justifyContent: "end" }}>
              <a href={props.link} target="_blank">
                ⇒Go and see it
              </a>
            </div>
          )}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default CarouselItem;
