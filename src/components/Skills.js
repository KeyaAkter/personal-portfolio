import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    skillName: "HTML",
  },
  {
    id: 2,
    skillName: "CSS",
  },
  {
    id: 3,
    skillName: "Boostrap",
  },
  {
    id: 4,
    skillName: "Tailwind CSS",
  },
  {
    id: 5,
    skillName: "JavaScript",
  },
  {
    id: 6,
    skillName: "React.js",
  },
  {
    id: 7,
    skillName: "React Router",
  },
  {
    id: 8,
    skillName: "Redux.js",
  },
  {
    id: 9,
    skillName: "Redux Toolkit",
  },
  {
    id: 10,
    skillName: "Axios",
  },
  {
    id: 11,
    skillName: "GSAP",
  },
  {
    id: 12,
    skillName: "Firebase",
  },
];
const Skills = () => {
  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <SectionTitle title={"Skills"} />
      <div className="skills-wrapper grid grid-col-2 gap-10  mt-40 ">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li key={skill.id} className="skill-item overflow-hidden">
                <div className="flex gap-10 items-baseline">
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-title">{skill.skillName}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li key={skill.id} className="skill-item overflow-hidden">
                <div className="flex gap-10 items-baseline">
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-title">{skill.skillName}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
