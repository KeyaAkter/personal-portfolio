import { useRef } from "react";
import { useHeadlineReveal, useImageReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://res.cloudinary.com/djnti9d7n/image/upload/v1675342999/personal-portfolio/hero-1_bnoupa.jpg",
  img2: "https://res.cloudinary.com/djnti9d7n/image/upload/v1675342993/personal-portfolio/hero-2_giok38.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadline1Ref = useRef(null);
  const heroHeadline2Ref = useRef(null);

  const headlines = [heroHeadline1Ref, heroHeadline2Ref];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlines, 1.5);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadline1Ref}>Front-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadline2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
