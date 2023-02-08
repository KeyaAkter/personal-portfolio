import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "TECH ALPHA — AN ELECTRONICS STORE",
    img1: "https://res.cloudinary.com/djnti9d7n/image/upload/v1675859722/personal-portfolio/tech-alpha-1_vae51m.png",
    img2: "https://res.cloudinary.com/djnti9d7n/image/upload/v1675859714/personal-portfolio/tech-alpha-2_wmpd2g.png",
    description:
      "Shopping cart functionality has been implemented using Redux Toolkit. All the product data has been served via JSON server and fetched using RTK Query. Cart items also saved into the local storage of the client’s browser",
    tools: ["React.js", "Tailwind CSS", "Redux.js", "Redux Toolkit", "Axios"],
    liveLink: "https://project-tech-alpha.netlify.app/",
    frontEndLink: "https://github.com/KeyaAkter/tech-alpha",
  },
  {
    id: 2,
    title: "FOODVERSE — A RECIPE WEB APPLICATION",
    img1: "https://res.cloudinary.com/djnti9d7n/image/upload/v1675859716/personal-portfolio/foodvarse-1_jvddcp.png",
    img2: "https://res.cloudinary.com/djnti9d7n/image/upload/v1675859720/personal-portfolio/foodvarse-2_kwleok.png",
    description:
      "Foodverse is a recipe web application, where an user can search different kinds of recipe and find the necessary ingredients for the specific recipe item. Also a recipe item can be saved into the local storage of the browser.",
    tools: ["React.js", "React Router", "Redux Icons", "Tailwind CSS"],
    liveLink: "https://project-foodvarse.netlify.app/",
    frontEndLink: "https://github.com/KeyaAkter/foodverse",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"Projects"} />

      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
