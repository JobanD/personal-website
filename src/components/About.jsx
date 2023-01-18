import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import Pdf from "../assets/Joban_CV.pdf";
import "../css/about.css";

export default function About() {
  return (
    <div className="about-me-container" id="about" flexItem>
      <Typography variant="h2">About Me</Typography>
      <div className="about-me-description">
        <Typography>
          Hello, my name is Joban Dhindsa I am a software developer who
          graduated from the University of Windsor with a Honours Bachelor's
          Degree in Business Administration and Computer Science. <br></br>
          <br></br>
          Aside from coding I love to spend my freetime watching the NBA,
          playing video games, spending time with friends and family, and
          consuming a variety of shows and movies. (One piece is my favourite!)
        </Typography>
        <br></br>
        <Typography>
          Thank you for taking the time to explore my portfolio, if you would
          like to learn more you can check out my{" "}
          <a href={Pdf} target="_blank" rel="noreferrer">
            Resume
          </a>
          &nbsp;or check out some{" "}
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Projects
          </Link>
          &nbsp;I have worked on in my spare time as well.
        </Typography>
        <br></br>
        <Typography>
          {" "}
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact Me
          </Link>{" "}
          {/* SPACE BETWEEN IF AND CONTACT */}
          &nbsp;if you wish to reach me directly.
        </Typography>
      </div>
    </div>
  );
}
