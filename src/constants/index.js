import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  starbucks,
  shoeApp,
  jobRecSystem,
  reminder,
  bootstrap,
  react_bootstrap,
  MYSQL,
  appwrite,
  vss,
  somma,
  menge,
  unitybook,
  hoski,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: backend,
    techs: ["CSS", "Tailwind CSS", "Bootstrap", "React-Bootstrap"],
  },
  {
    title: "Full Stack Web Developer",
    icon: web,
    techs: ["React", "Next.js", "MYSQL", "Appwrite"],
  },
  {
    title: "Mobile App Developer",

    icon: mobile,
    techs: ["React Native"],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  { name: "Bootstrap", icon: bootstrap },
  { name: "React-Bootstrap", icon: react_bootstrap },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  { name: "MYSQL", icon: MYSQL },
  { name: "Appwrite", icon: appwrite },

  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Somma School",
    description: "Web based online school",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: somma,
    source_code_link: "https://github.com/melese-2121/Somma-Online-School",
    live_link: "https://somma-online-school.onrender.com/",
  },
  {
    name: "Porfolio Website",
    description: "Portfolio website developed for one of my client.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: menge,
    source_code_link: "https://github.com/melese-2121/MengePortfolio",
    live_link: "https://mengstu.onrender.com/",
  },
  {
    name: "Social Media Home page ",
    description:
      "It is just simple html, css and javascript social media home page",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: unitybook,
    source_code_link: "https://github.com/melese-2121/UnityBook",
    live_link: "https://unitybook.onrender.com/",
  },
  {
    name: "Shoe App",
    description:
      "Web application that enables users to view shoes and find brand shoes suitable for them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: shoeApp,
    source_code_link: "https://github.com/melese-2121/nike_shoe_app",
  },

  {
    name: "Visual Story Share (VSS)",
    description:
      "Visual Story Share is a full stack dynamic online platform designed to facilitate creative expression. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
    ],
    image: vss,
    source_code_link: "https://github.com/melese-2121/visual_story_share",
  },
  {
    name: "Job Recruitement System",
    description:
      "Web-based platform that allows users to search and and apply a job posted by companies. The system gives response according to the their CGPA , dipartement and different cracterias. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "React-Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobRecSystem,
    source_code_link: "https://github.com/melese-2121/Job-recruitement-system",
  },
  {
    name: "Hoski Media Home Page",
    description:
      "This is single page app for hoski media company test purpose.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: hoski,
    source_code_link: "https://github.com/melese-2121/hoski_home",
  },
];

export { services, technologies, experiences, testimonials, projects };
