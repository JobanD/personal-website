import React from "react";
import "../css/skills.css";
import { Typography, SvgIcon, List, ListItem } from "@mui/material";
import { ReactComponent as CssLogo } from "../assets/icons/Css3_logo.svg";
import { ReactComponent as HtmlLogo } from "../assets/icons/html5_logo.svg";
import { ReactComponent as JsLogo } from "../assets/icons/javascript_logo.svg";
import { ReactComponent as ReactLogo } from "../assets/icons/react_logo.svg";
import { ReactComponent as PythonLogo } from "../assets/icons/python_logo.svg";
import { ReactComponent as DjangoLogo } from "../assets/icons/django_logo.svg";
import { ReactComponent as GithubLogo } from "../assets/icons/github_logo.svg";
import { ReactComponent as AccessibilityLogo } from "../assets/icons/accessibility_logo.svg";

export default function Skills() {
  return (
    <div className="skills-container" id="skills">
      <div flexItem>
        <Typography variant="h2">My Toolkit</Typography>
        <div className="skills-sections-container">
          <div className="skills-content-container">
            <div className="skills-lists-container">
              <List className="skills-list" flexItem>
                <ListItem>
                  <SvgIcon
                    className="svgIcon"
                    viewBox="0 0 50 50"
                    fontSize="large"
                  >
                    <JsLogo />
                  </SvgIcon>
                  Javascript
                </ListItem>
                <ListItem>
                  <SvgIcon className="svgIcon" fontSize="large">
                    <HtmlLogo />
                  </SvgIcon>
                  HTML5
                </ListItem>
                <ListItem>
                  <SvgIcon className="svgIcon" fontSize="large">
                    <CssLogo />
                  </SvgIcon>
                  CSS3
                </ListItem>
                <ListItem>
                  <SvgIcon
                    className="svgIcon"
                    viewBox="0 0 28 28"
                    fontSize="large"
                  >
                    <ReactLogo />
                  </SvgIcon>
                  React
                </ListItem>
                <ListItem>
                  <SvgIcon
                    className="svgIcon"
                    viewBox="0 0 28 28"
                    fontSize="large"
                  >
                    <PythonLogo />
                  </SvgIcon>
                  Python
                </ListItem>
                <ListItem>
                  <SvgIcon
                    className="svgIcon"
                    viewBox="0 0 50 30"
                    fontSize="large"
                  >
                    <DjangoLogo />
                  </SvgIcon>
                  Django
                </ListItem>
                <ListItem>
                  <SvgIcon className="svgIcon" fontSize="large">
                    <GithubLogo />
                  </SvgIcon>
                  Github
                </ListItem>
                <ListItem>
                  <SvgIcon className="svgIcon" fontSize="large">
                    <AccessibilityLogo />
                  </SvgIcon>
                  Accessibility
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
