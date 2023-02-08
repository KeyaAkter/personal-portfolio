import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        A talented ReactJS developer with expertise in Tailwind CSS, GSAP,
        Redux, Redux Toolkit, and Firebase Authentication. Passionate about
        creating dynamic web experiences and constantly improving skills.
        Committed to producing high-quality, user-friendly solutions. Ready to
        bring clients' visions to life.
      </p>
    </div>
  );
};

export default Bio;
