import React from "react";
import "../css/projects.css";
import ProjectCard from "./ProjectCard";
import { Typography } from "@mui/material";
// import { Link } from "react-scroll";
import BasketballPNG from "../assets/basketball-stock.jpg";
import QuizJPG from "../assets/quiz.jpg";

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <Typography variant="h2">Projects</Typography>
      <div className="projects-cards-container">
        <ProjectCard
          imageSource={BasketballPNG}
          alt="Preview image of basketball project website"
          title="Basketball Projections Project"
          description="This project projects future player statistics for any
          basketball player in the NBA."
          tech="Django, Python, Pandas"
          webUrl="http://joban.pythonanywhere.com"
          githubUrl="https://github.com/JobanD/Fantasy_Basketball-V2.0"
        />
        <ProjectCard
          imageSource={QuizJPG}
          alt="Question mark symbolizing quiz"
          title="Quizzical"
          description="Answer a 5 question quiz containing questions from multiple categores and recieve a score."
          tech="React, Javascript"
          webUrl="https://jobanquiz.netlify.app"
          githubUrl="https://github.com/JobanD/quizzical"
        />
      </div>
    </div>
  );
}
