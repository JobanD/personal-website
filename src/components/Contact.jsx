import React from "react";
import Pdf from "../assets/Joban_Resume.pdf";
import "../css/contact.css";
import { Typography, Avatar } from "@mui/material";
import GithubPng from "../assets/github.png";
import LinkedinPng from "../assets/linkedin.png";
import ResumePng from "../assets/resume.png";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-blurb">
        <div>
          <Typography variant="h2">Connect with me</Typography>
          <Typography>
            If you want to contact me you can reach me through the contact form
            or find me on my social media. Looking forward to hearing from you!
          </Typography>
        </div>
        <div className="contact-socials">
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
                  sx={{ bgcolor: "var(--main-cream-color)" }}
                  className="github-avatar avatar"
                />
                <Typography>Github</Typography>
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
                  sx={{ bgcolor: "var(--main-cream-color)" }}
                  className="linkedin-avatar avatar"
                />
                <Typography>LinkedIn</Typography>
              </a>
            </li>
            <li>
              <a href={Pdf} target="_blank" rel="noreferrer">
                <Avatar
                  src={ResumePng}
                  alt="Resume"
                  sx={{ bgcolor: "var(--main-cream-color)" }}
                  className="resume-avatar avatar"
                />
                <Typography>Resume</Typography>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* CONTACT FORM */}
      <div className="form-container">
        <form
          name="contact v2"
          method="post"
          data-netlify="true"
          onSubmit="submit"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact v2" />

          <div hidden>
            <input name="bot-field" />
          </div>

          <div className="form-element">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-element">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="form-element">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" />
          </div>

          <div className="form-element message">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required></textarea>
          </div>

          <button type="submit" className="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
