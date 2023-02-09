import { useRef } from "react";
import { useProjectReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/djnti9d7n/image/upload/v1675907588/personal-portfolio/about-3_q3iaxf.jpg",
  img2: "https://res.cloudinary.com/djnti9d7n/image/upload/v1675907591/personal-portfolio/about-1_tevyuj.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const about = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectReveal(about);

  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            Hi, I'm a Front-End developer with a strong focus on React.js,
            Redux.js, Redux Toolkit, JavaScript, Tailwind CSS, Firebase
            Authentication, and GSAP. I have a passion for building creative and
            dynamic web applications and constantly strive to improve my skills
            and knowledge in web development. I have a keen eye for detail and a
            commitment to producing high-quality, user-friendly solutions
          </p>

          <p className="mt-10">
            As a beginner in the industry, I am eager to gain more hands-on
            experience and work on challenging projects. I would love the
            opportunity to bring your vision to life and grow as a developer.
            Whether you're looking for a simple website or a complex web
            application, I am confident in my ability to deliver a solution that
            meets your needs and exceeds your expectations
          </p>

          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQlbRCEjKj7dkoHHz1C0kSX7_TxYFJZROh-Q3YOVbMYLDRnWwhxYSINOpBCdd424Fut7pVHEK7fn5Qu/pub"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
