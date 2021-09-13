const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://github.com/Sandeep3005/Sandeep3005.github.io",
  title: "JS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Sandeep Chikhale",
  role: "Front End Developer",
  description:
    "I am a passionate and dedicated developer currently working with Barclays, India. I’ve had the privilege of working at an real-state agency(knotel.com), helper web-app for kids as a freelance developer, learned a lot at start-up and then a huge corporation like Barclays and NIIT.",
  resume:
    "https://drive.google.com/file/d/1xRJ0dy5PrgUCF4-uPeTHMr79hzeByHl_/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/sandeep-chikhale/",
    github: "https://github.com/Sandeep3005/",
  },
};

const experiences = [
  // experience card can be added an removed
  // if there are no experience, Projects section won't show up
  {
    name: "Barclays Global Service Centre",
    city: "Pune",
    designation: "UI Developer",
    duration: "Jan, 2019 - Present",
    description: `<ul>
          <li>Developed JS-based/ReactJS front-end applications.</li>
          <li>Participated in ongoing transition from old JS-based applications to React applications.</li>
      </ul>`,
  },
  {
    name: "Ikigai Infotech LLC",
    city: "Ahemdabad",
    designation: "Sr. Frontend developer",
    duration: "Jan, 2018 - Dec, 2018",
    description: `<ul>
          <li>Oversee all the front-end development.</li>
          <li>Mentored and guide other developers.</li>
      </ul>`,
  },
  {
    name: "Freelance developer",
    designation: "Remote developer",
    duration: "Sep, 2016 - Dec, 2017",
    description: `<ul>
          <li>Worked on major front-end frameworks like Angular and ReactJS</li>
          <li>Learned and worked isomorphic web framework Meteor JS.</li>
      </ul>`,
  },
];

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Chrome Extension for Gmail",
    description:
      "The extension binds with Gmail and enhances Gmail with features like email tracking, email templating, file sharing, and many others.",
    stack: ["Javascript", "InboxSDK"],
    livePreview:
      "https://chrome.google.com/webstore/detail/free-email-tracking-sched/acfmebaomboldplijdpfepofggkocgnl?hl=en",
  },
  {
    name: "NPM Package",
    description:
      "Node-based cli tool to get lint error associated with only one file for angular 4+.This help user to view lint associated to each file.",
    stack: ["NodeJS", "Javascript", "React"],
    sourceCode: "https://github.com/Sandeep3005/ng-lintone",
    livePreview: "https://www.npmjs.com/package/ng-lintone-cli",
  },
  {
    name: "Rest API",
    description:
      "A REST API was developed with Node, Express, and MongoDB using the mongoose js library for ORM.",
    stack: ["NodeJS", "Javascript", "Express"],
    sourceCode: "https://github.com/Sandeep3005/mission-node-api",
    livePreview: "https://mission-api.herokuapp.com/",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "NodeJS",
  "Material UI",
  "Git",
  "Jest",
  "Java",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "chikhale.sandeep.2002@gmail.com",
};

export { header, about, projects, skills, contact, experiences };
