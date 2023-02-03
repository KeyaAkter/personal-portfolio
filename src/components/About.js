import { useRef } from "react";

const About = () => {
  const aboutLeftRef = useRef(null);
  return (
    <div className="about container mx-auto mt-40" id="about">
      <div className=" overflow-hidden">
        <h2 className="section-title">Projects</h2>
      </div>

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
        </div>
      </div>
    </div>
  );
};

export default About;
