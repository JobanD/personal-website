import React from "react";
import { ButtonGroup, Button, Tooltip } from "@mui/material/";
import { Home, Lightbulb, Build, ContactPage } from "@mui/icons-material";
import "../css/nav.css";
import AvatarNav from "./AvatarNav";
import MobileNav from "./MobileNav";
import useWindowSize from "../hooks/useWindowSize";

export default function Nav() {
  const [height, width] = useWindowSize();
  return width < 60000 ? (
    <MobileNav />
  ) : (
    <header>
      <div className="nav-container">
        {/* Custom Component: Turns Avatar in navbar into a button with a drop down menu */}
        <AvatarNav />
        <>
          height: {height}, width: {width}
        </>
        <ButtonGroup variant="contained" className="button-group">
          <Tooltip title="Home">
            <Button size="small" startIcon={<Home />} href="#">
              Home
            </Button>
          </Tooltip>
          <Tooltip title="Jump to skills">
            <Button size="small" startIcon={<Lightbulb />} href="#skills">
              Skills
            </Button>
          </Tooltip>
          <Tooltip title="Jump to projects">
            <Button size="small" startIcon={<Build />} href="#projects">
              Projects
            </Button>
          </Tooltip>
          <Tooltip title="Contact">
            <Button size="small" startIcon={<ContactPage />} href="#contact">
              Contact
            </Button>
          </Tooltip>
        </ButtonGroup>
      </div>
    </header>
  );
}
