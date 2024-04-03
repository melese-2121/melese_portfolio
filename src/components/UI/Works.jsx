import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { github, live } from "../../assets";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const defaultOptions = {
    reverse: true,
    max: 10,
    perspective: 1000,
    scale: 1.07,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <motion.div
      id="work"
      variants={fadeIn("", "spring", index * 0.5, 0.5)}
      className="mx-auto  flex-wrap  rounded-sm max-sm:px-[10%] "
    >
      <Tilt
        options={defaultOptions}
        className="bg-black-200  flex-wrap rounded-xl  sm:w-[300px]  border-2 border-zinc-50 bg-heading p-1  "
      >
        <div className="relative w-full ">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full  object-cover rounded-md"
          />
        </div>

        <div className="mt-5  min-h:h-[20px]  px-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-smallTextBlur text-[14px]">{description}</p>
          <div className="mt-2 text-primary flex flex-wrap gap-x-5 gap-y-2 px-1">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-center">
          <div className="flex justify-end m-3 card-img_hover group">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-9 h-9 hover:w-10 hover:h-10 duration-500 rounded-full object-contain bg-black"
              />
            </div>
            <div className="tooltip hidden group-hover:block absolute bg-gray-800 text-white  px-2 py-1 rounded whitespace-nowrap -ml-10 -mt-8">
              <i class="fab fa-github mr-2 text-sm text-green-400"></i>Source
              Code
            </div>
          </div>
          <div className="flex justify-end m-3 card-img_hover group">
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={live}
                alt="live"
                className="w-9 h-9 hover:w-10 hover:h-10 duration-500 rounded-full object-contain p-1 bg-[#0a0311]"
              />
            </div>
            <div className="tooltip hidden group-hover:block absolute bg-gray-800 text-white  px-2 py-1 rounded whitespace-nowrap -ml-10 -mt-8">
              <i class="fas fa-globe mr-2 text-sm text-green-400"></i>Show Live
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="text-heading  text-center font-[800] text-[2.4rem] -mb-10 mt-28">
          Projects
        </h2>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mx-auto   text-heading font-[500] text-[16px] leading-7 w-[70%] "
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to <span className="text-green-600">code</span> repositories and
          <span className="text-green-600"> Live </span> show. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-10 md:gap-14  mx-auto">
        {projects.map((project, index) => (
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            key={`project-${index}`}
            className="w  sm:w-1/2 lg:w-1/3"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Works;
