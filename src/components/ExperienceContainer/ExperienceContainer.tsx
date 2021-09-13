import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ExperienceContainer.css";

interface IExperience {
  name: string;
  city?: string;
  duration: string;
  description: string;
  designation: string;
}

const ExperienceContainer = ({ experience }: { experience: IExperience }) => (
  <div className="experience">
    <h3>{experience.name}</h3>

    <p className="experience__designation">{experience.designation}</p>
    <p className="experience__duration">{experience.duration}</p>
    <p
      className="experience__description"
      dangerouslySetInnerHTML={{ __html: experience.description }}
    ></p>
    {/* {experience.stack && (
      <ul className="project__stack">
        {experience.stack.map((item: any) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )} */}

    {/* {experience.sourceCode && (
      <a
        href={experience.sourceCode}
        aria-label="source code"
        className="link link--icon"
      >
        <GitHubIcon />
      </a>
    )} */}
    {/* 
    {experience.livePreview && (
      <a
        href={experience.livePreview}
        aria-label="live preview"
        className="link link--icon"
      >
        <LaunchIcon />
      </a>
    )} */}
  </div>
);

export default ExperienceContainer;
