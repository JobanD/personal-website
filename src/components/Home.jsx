import React from "react";
import "../css/home.css";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import useWindowSize from "../hooks/useWindowSize";
import ProfilePhoto from "../assets/headshot.JPEG";

export default function Home() {
  const [height, width] = useWindowSize(); // height and width of viewport

  // CURSOR

  // const cursor = document.getElementById("cursor");

  // const tip = document.getElementById("tip");

  // document.addEventListener("mousemove", (e) => {
  //   cursor.style.top = e.pageY + "px";
  //   cursor.style.left = e.pageX + "px";

  //   tip.style.display = "none";
  // });

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let elementTop = reveals[i].getBoundingClientRect().top; // distance from top of viewport
      const elementVisible = 150;
      if (elementTop < height - elementVisible) {
        reveals[i].classList.add("active");
      } // else {
      //   reveals[i].classList.remove("active");
      // }
    }
  }

  window.addEventListener("scroll", reveal);
  reveal();

  return (
    <div className="home-container">
      {/* <div id="cursor"></div>
      <div id="tip"></div> */}
      <div className="main-content" id="home">
        <div className="main-content-text">
          <Typography variant="h3" className="name-text">
            Hello, my name is Joban Dhindsa
          </Typography>
          <Typography variant="h1" className="title-text">
            Software Developer
          </Typography>
          <Typography variant="subtitle1" className="main-content-text-body">
            I love to code and design things! I am always eager to learn more
            and expand my skillset. Please navigate the website to learn more{" "}
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className="about-me-main"
            >
              About Me
            </Link>
          </Typography>
        </div>
        <div className="profile-image-container">
          <img
            src={ProfilePhoto}
            className="profile-image"
            alt="Headshot of Joban Dhindsa"
          />
        </div>
        <div className="wave-main">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <section className="reveal fade-bottom">
        <About />
        <div className="about-waves">
          <div className="wave-about wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1650 120"
              preserveAspectRatio="none"
            >
              <path
                d="M 321.4 56.4 c 58 -10.8 114.2 -30.1 172 -41.9 c 82.4 -16.7 168.2 -17.7 250.4 -0.4 C 823.8 31 906.7 72 985.7 92.8 c 70 18.5 146.5 26.1 214.3 3 C 1239 87 1266.7 69.3 1300 56 C 1328.3 36.7 1475 13 1631 3 V -4 H 0 V 0 A 600.2 600.2 0 0 0 321.4 56.4 Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          {/* <div className="wave-about2 wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1650 120"
              preserveAspectRatio="none"
              transform="scale(-1 1) translate(0 0)"
            >
              <path
                d="M 321.4 56.4 c 58 -10.8 114.2 -30.1 172 -41.9 c 82.4 -16.7 168.2 -17.7 250.4 -0.4 C 823.8 31 906.7 72 985.7 92.8 c 70 18.5 146.5 26.1 214.3 3 C 1239 87 1266.7 69.3 1300 56 C 1328.3 36.7 1475 13 1631 3 V -4 H 0 V 0 A 600.2 600.2 0 0 0 321.4 56.4 Z"
                className="shape-fill"
              ></path>
            </svg>
          </div> */}
        </div>
      </section>
      <section className="reveal fade-right">
        <Skills />
      </section>
      <section className="reveal fade-bottom">
        <div
          className="project-waves"
          style={{ transform: "rotate(180deg) translateX(-100%)" }}
        >
          {/* <div className="wave-projects wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1650 120"
              preserveAspectRatio="none"
              // transform="rotate(180) translate(700 0)"
            >
              <path
                d="M 321.4 56.4 c 58 -10.8 114.2 -30.1 172 -41.9 c 82.4 -16.7 168.2 -17.7 250.4 -0.4 C 823.8 31 906.7 72 985.7 92.8 c 70 18.5 146.5 26.1 268.3 -31.8 C 1290 44 1317 23 1340 0 V 0 H 0 V 3 A 600.2 600.2 0 0 0 321.4 56.4 Z"
                class="shape-fill"
              ></path>
            </svg>
          </div> */}
          <div className="wave-projects2 wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1650 120"
              preserveAspectRatio="none"
              // transform="scale(-1 1) translate(-100 0)"
            >
              <path
                d="M 321.4 56.4 c 58 -10.8 114.2 -30.1 172 -41.9 c 82.4 -16.7 168.2 -17.7 250.4 -0.4 C 823.8 31 906.7 72 985.7 92.8 c 70 18.5 146.5 26.1 268.3 -31.8 C 1290 44 1317 23 1340 0 V 0 H 0 V 3 A 600.2 600.2 0 0 0 321.4 56.4 Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <Projects />
      </section>
      <section className="reveal fade-right">
        <Contact />
      </section>
    </div>
  );
}
