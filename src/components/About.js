import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/djnti9d7n/image/upload/v1675342993/personal-portfolio/about-1_dxvzdu.jpg",
  img2: "https://res.cloudinary.com/djnti9d7n/image/upload/v1675343009/personal-portfolio/about-2_bwad1l.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);

  useHoverEffect(aboutLeftRef, data.img1, data.img2);

  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            explicabo voluptates. Modi voluptate officia deleniti odio dolores
            suscipit quod ab, culpa nesciunt qui. Repellat incidunt laboriosam
            quaerat recusandae, suscipit harum qui animi sequi minus, est fugit
            obcaecati neque dolor consequuntur vero perspiciatis velit modi
            cupiditate illo exercitationem ad sit? Ipsam exercitationem debitis
            tempore officia deserunt, aspernatur tempora placeat illum inventore
            aliquam unde atque non enim quidem possimus sit esse similique a
            magnam consectetur dolor! Corporis, optio aliquam quae ex modi autem
            exercitationem eos consequuntur sequi numquam quia id cumque
            dignissimos. Veniam est officia tenetur fuga vel consequatur
            accusantium libero ipsa.
          </p>

          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            explicabo voluptates. Modi voluptate officia deleniti odio dolores
            suscipit quod ab, culpa nesciunt qui. Repellat incidunt laboriosam
            quaerat recusandae, suscipit harum qui animi sequi minus, est fugit
            obcaecati neque dolor consequuntur vero perspiciatis velit modi
            cupiditate illo exercitationem ad sit? Ipsam exercitationem debitis
            tempore officia deserunt, aspernatur tempora placeat illum inventore
            aliquam unde atque non enim quidem possimus sit esse similique a
            magnam consectetur dolor! Corporis, optio aliquam quae ex modi autem
            exercitationem eos consequuntur sequi numquam quia id cumque
            dignissimos. Veniam est officia tenetur fuga vel consequatur
            accusantium libero ipsa.
          </p>

          <a
            href="https:// www.google.com"
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
