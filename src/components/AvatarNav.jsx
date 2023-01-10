// import React, { useState } from "react";
import Pdf from "../assets/Joban_CV.pdf";
import {
  // IconButton,
  Avatar,
  Menu,
  MenuItem,
  // Tooltip,
  Link,
} from "@mui/material/";

export default function AvatarNav() {
  return (
    <div>
      <Menu id="account-menu">
        {/* ICONS FOR GITHUB AND LINKED IN FROM icons8 */}
        <MenuItem
          component={Link}
          href="https://github.com/JobanD"
          target="_blank"
        >
          <Avatar src="/src/assets/github.png" alt="GitHub" /> GitHub
        </MenuItem>
        <MenuItem
          component={Link}
          href="https://www.linkedin.com/in/jobandhindsa/"
          target="_blank"
        >
          <Avatar src="/src/assets/linkedin.png" alt="LinkedIn" /> LinkedIn
        </MenuItem>
        <MenuItem component={Link} href={Pdf} target="_blank">
          <Avatar src="/src/assets/resume.png" alt="Resume" /> Resume
        </MenuItem>
      </Menu>
    </div>
  );
}
