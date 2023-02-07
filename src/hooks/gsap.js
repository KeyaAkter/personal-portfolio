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
        y: "-100vh",
      },
      {
        y: 0,
        duration: 2,
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
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay,
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
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

// Revealing Bio
export const useBioReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 500,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

// Revealing Socials
export const useSocialReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        x: -500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

// Revealing Section Title
export const useSectionTitleReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1.2,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el, delay]);
};

// Revealing Projects & About
export const useProjectReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

// Skill Line Reveal
export const useSkillLineReveal = (items) => {
  useEffect(() => {
    items.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          onEnter() {
            el.classList.add("reveal");
          },
        },
      });
    });
  }, [items]);
};

// Skill Text Reveal
export const useSkillTextReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [el, delay]);
};

// Footer Reveal
export const useFooterReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: -100,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el, delay]);
};

// Revealing Contact
export const useInputReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};
