import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Revealing Hero Image
export const useImageReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

// Revealing Hero Headlines
export const useHeadlineReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-100vh",
      },
      {
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [items, delay]);
};

// Revealing Nav Links
export const useLinkReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};
