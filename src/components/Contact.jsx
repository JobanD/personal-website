import React from "react";
import {
  useNetlifyForm,
  // NetlifyFormProvider,
  // NetlifyFormComponent,
  // Honeypot,
} from "react-netlify-forms";
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
  } = useForm({ mode: "onblur" }); // destructure needed things from useForm

  const netlify = useNetlifyForm({
    name: "react-hook-form",
    action: "/thanks",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      console.log("Successfully sent form data to Netlify Server");
    },
  });

  const handleRegistration = (data) => netlify.handleSubmit(null, data);
  const handleError = (errors) => {};

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

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
          // data-netlify="true"
          onSubmit={handleSubmit(handleRegistration, handleError)}
          data-netlify-honeypot="bot-field"
          netlify
        >
          <div className="form-element">
            <input type="hidden" name="form-name" value="contact v2" />
            <div hidden>
              <input type="bot-field" />
            </div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" {...register("name")} />
            {errors.name && <div>errors.name.message</div>}
          </div>
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <div>errors.email.message</div>}
          </div>
          <div className="form-element">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" {...register("subject")} />
          </div>
          <div className="form-element message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && <div>errors.message.message</div>}
          </div>
          <button
            type="submit"
            className="submit"
            form="contact v2"
            value="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
