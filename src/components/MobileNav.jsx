import React, { useState } from "react";
import "../css/mobileNav.css";
import Pdf from "../assets/Joban_CV.pdf";
import { SvgIcon, Typography, Avatar } from "@mui/material";
import { Link } from "react-scroll";
import GithubPng from "../assets/github.png";
import LinkedinPng from "../assets/linkedin.png";
import ResumePng from "../assets/resume.png";

export default function MobileNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleClick = () => {
    setIsNavExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <header>
      <div className="mobile-nav-container">
        {/* <AvatarNav /> */}
        <button className="hamburger" onClick={handleClick}>
          {/* icon from heroicons.com */}
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            htmlColor="white"
            titleAccess="Menu"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </SvgIcon>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div className="nav-menu-items">
            <ul className="nav-menu-list">
              <li>
                <Link
                  activeClass="active"
                  onClick={handleClick}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={100}
                >
                  <Typography variant="h4">Home</Typography>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  onClick={handleClick}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={100}
                >
                  <Typography variant="h4">About</Typography>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  onClick={handleClick}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={100}
                >
                  <Typography variant="h4">Skills</Typography>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  onClick={handleClick}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={100}
                >
                  <Typography variant="h4">Projects</Typography>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  onClick={handleClick}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={100}
                >
                  <Typography variant="h4">Contact</Typography>
                </Link>
              </li>
            </ul>
            <div className="socialBox">
              <ul>
                <li>
                  <a
                    href="https://github.com/JobanD"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Avatar
                      src={GithubPng}
                      alt="GitHub"
                      sx={{ bgcolor: "white" }}
                      className="github-avatar"
                    />
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jobandhindsa/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Avatar
                      src={LinkedinPng}
                      alt="LinkedIn"
                      sx={{ bgcolor: "white" }}
                      className="linkedin-avatar"
                    />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={Pdf} target="_blank" rel="noreferrer">
                    <Avatar
                      src={ResumePng}
                      alt="Resume"
                      sx={{ bgcolor: "white" }}
                      className="resume-avatar"
                    />
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
