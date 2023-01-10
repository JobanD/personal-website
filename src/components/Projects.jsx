import React from "react";
import "../css/projects.css";
import ProjectCard from "./ProjectCard";
import { Typography } from "@mui/material";
// import { Link } from "react-scroll";
import BasketballPNG from "../assets/basketball-stock.jpg";

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <Typography variant="h2">Projects</Typography>
      <div className="projects-cards-container">
        <ProjectCard
          imageSource={BasketballPNG}
          alt="Preview image of basketball project website"
          title="Basketball Project"
          description="This project projects future player statistics for any
          basketball player in the NBA"
          webUrl="http://www.google.com/"
          githubUrl="http://www.google.com/"
        />
        <ProjectCard
          imageSource={BasketballPNG}
          alt="basketball net"
          title="Basketball Project"
          description="This project projects future player statistics for any
          basketball player in the NBA"
          webUrl="http://www.google.com/"
          githubUrl="http://www.google.com/"
        />
      </div>
    </div>
  );
}
