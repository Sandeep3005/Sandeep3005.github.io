import uniqid from "uniqid";
import { experiences } from "../../portfolio";
import ExperienceContainer from "../ExperienceContainer/ExperienceContainer";
import "./Experience.css";

const Experiences = () => {
  if (!experiences.length) return null;

  return (
    <section id="experience" className="section projects">
      <h2 className="section__title">Experience</h2>

      <div className="projects__grid">
        {experiences.map((experience) => (
          <ExperienceContainer key={uniqid()} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
