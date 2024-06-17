// src/components/ProjectSection.js
import { motion } from "framer-motion";
import "./ProjectSection.css";
import { github, live, vsshome } from "../../assets";

const ProjectSection = () => {
  return (
    <motion.div
      className="project-section max-md:flex max-md:flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="concepts-learned">
        <h1 className="w-full flex justify-center items-center text-3xl  font-bold text-green-500">
          Recent project{" "}
          <div className="flex justify-end items-center ml-10">
            <div className="flex justify-end m-3 card-img_hover group">
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/melese-2121/visual_story_share",
                    "_blank"
                  )
                }
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-9 h-9 hover:w-10 hover:h-10 duration-500 rounded-full object-contain bg-black"
                />
              </div>
              <div className="tooltip hidden group-hover:block absolute bg-gray-800 text-white  px-2 py-1 rounded whitespace-nowrap -ml-10 -mt-8">
                <i className="fab fa-github mr-2 text-sm text-green-400"></i>
                Source Code
              </div>
            </div>
            <div className="flex justify-end m-3 card-img_hover group">
              <div
                onClick={() =>
                  window.open(
                    "https://visual-story-share.vercel.app/",
                    "_blank"
                  )
                }
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={live}
                  alt="live"
                  className="w-9 h-9 hover:w-10 hover:h-10 duration-500 rounded-full object-contain p-1 bg-[#0a0311]"
                />
              </div>
              <div className="tooltip hidden group-hover:block absolute bg-gray-800 text-white  px-2 py-1 rounded whitespace-nowrap -ml-10 -mt-8">
                <i className="fas fa-globe mr-2 text-sm text-green-400"></i>Show
                Live
              </div>
            </div>
          </div>
        </h1>
        <h2>Learned</h2>
        <ul className="text-sm">
          <li>Responsive Design</li>
          <li>React Queries</li>
          <li>React Drag and Drop</li>
          <li>State Management with React Context API</li>
          <li>Advanced React Hook Concepts</li>
          <li>Appwrite</li>
          <li>API Integration</li>
          <li>Deployment with Vercel</li>
        </ul>
      </div>

      <motion.div
        className="project-image cursor-pointer "
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() =>
          window.open("https://visual-story-share.vercel.app/", "_blank")
        }
      >
        <img src={vsshome} alt="Live Deployed Site" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectSection;
