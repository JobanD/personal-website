import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import "../css/projects.css";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function ProjectCard(props) {
  const [height, width] = useWindowSize();
  const [clicked, setClicked] = useState(false);

  const handleMobileClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  const handleDesktopClick = () => {
    window.open(props.webUrl, "_blank");
  };

  // Stop propagation
  // Would occur because button inside of clickable card element
  function handleButtonClick(event) {
    event.stopPropagation();
  }

  return (
    <div>
      <Card
        className="project-card"
        sx={{
          maxWidth: 400,
          minWidth: 300,
          height: "auto",
          position: "relative",
          "&:hover": {
            transform: "scale3d(1.05, 1.05, 1)",
            "@media (hover: none)": {
              opacity: 1,
            },
          },
        }}
      >
        <CardActionArea
          onClick={width < 600 ? handleMobileClick : handleDesktopClick}
        >
          <CardMedia
            className="project-card-image"
            component="img"
            width="100%"
            height="100%"
            image={props.imageSource}
            alt={props.alt}
          />
          <div className={clicked ? "isClicked" : "card-content-container"}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
              >
                {props.title}
              </Typography>
              <Typography variant="body2" color="white">
                {props.description}
              </Typography>
              <div className="tech-div">
                <Typography variant="body4" color="white">
                  Tech used: {props.tech}
                </Typography>
              </div>
              {/* <CardActions> */}
              <Button
                size="medium"
                className="card-btn"
                target="_blank"
                href={props.githubUrl}
                onClick={handleButtonClick}
              >
                Github
              </Button>
              <Button
                size="medium"
                className="card-btn"
                target="_blank"
                href={props.webUrl}
                onClick={handleButtonClick}
              >
                Website
              </Button>
              {/* </CardActions> */}
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}
