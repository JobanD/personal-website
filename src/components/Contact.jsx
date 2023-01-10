import React from "react";
// import {
//   useNetlifyForm,
//   NetlifyFormProvider,
//   NetlifyFormComponent,
//   Honeypot,
// } from "react-netlify-forms";
import { useForm } from "react-hook-form";
import Pdf from "../assets/Joban_CV.pdf";
import "../css/contact.css";
import { Typography, Avatar } from "@mui/material";
import GithubPng from "../assets/github.png";
import LinkedinPng from "../assets/linkedin.png";
import ResumePng from "../assets/resume.png";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // destructure needed things from useForm

  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

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
      <div className="form-container">
        <form
          name="contact v1"
          method="post"
          data-netlify="true"
          onSubmit={handleSubmit(handleRegistration, handleError)}
        >
          <div className="form-element">
            <input type="hidden" name="form-name" value="contact v1" />
            <label>Name</label>
            <input name="name" {...register("name")} />
            {errors?.name && errors.name.message}
          </div>
          <div className="form-element">
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
            />
            {errors?.name && errors.name.message}
          </div>
          <div className="form-element">
            <label>Subject</label>
            <input name="subject" {...register("subject")} />
          </div>
          <div className="form-element message">
            <label>Message</label>
            <textarea name="message" {...register("message")}></textarea>
          </div>
          <button className="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
