import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        I'm a Front-End developer with expertise in React.js, Redux.js, Redux
        Toolkit, JavaScript, Tailwind CSS, Firebase Authentication and GSAP. I
        am passionate about creating dynamic web experiences and constantly
        improving skills. I am committed to producing high-quality,
        user-friendly solutions and ready to bring clients' visions to life.
      </p>
    </div>
  );
};

export default Bio;
