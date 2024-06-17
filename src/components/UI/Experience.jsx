import {
  Dowell1,
  Dowell2,
  Dowell3,
  Dowell4,
  Dowell5,
  Dowell6,
} from "../../assets";
import Slider from "./Slider";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Dowell",
    period: "Nov 2023 - June 2024",
    description:
      "Developed a real-time chat application using React and Socket.IO to facilitate communication between customers and line managers. Collaborated with backend developers working on node.js to ensure real-time communication.",

    mainContributions: [
      "Implemented real-time messaging with Socket.IO.",
      "Build NPM package for chat",
      "Developed the frontend using React, creating a responsive and intuitive user interface.",
      "Implemented features like user typing indicators, notifications, message read receipts, and file sharing.",
      "Conducted testing and debugging to ensure a smooth user experience.",
    ],
    slides: [
      {
        url: Dowell4,
      },
      {
        url: Dowell3,
      },
      {
        url: Dowell1,
      },
      {
        url: Dowell2,
      },

      {
        url: Dowell5,
      },
      {
        url: Dowell6,
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="p-8">
      <h2 className="text-heading  text-center font-[800] text-[2.4rem] mb-16 mt-10">
        Experience
      </h2>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className=" border-2 hover:bg-primary hover:text-white  rounded-lg p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold">{experience.role}</h3>
              <p className="text-gray-900">
                {experience.company}{" "}
                <span className="text-xs text-gray-400">
                  {" "}
                  - Research Company at UK and Singapoor
                </span>
              </p>{" "}
              <p className="text-gray-500 text-sm">{experience.period}</p>
              <p className="mt-4 text-gray-800 text-sm">
                {experience.description}
              </p>
              <h4 className="mt-4 text-lg font-semibold">
                Main Contributions:
              </h4>
              <ul className="list-disc list-inside text-gray-800 text-sm">
                {experience.mainContributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 pl-4">
              <Slider slides={experience.slides} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
