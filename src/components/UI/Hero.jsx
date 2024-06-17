import { hero1, heroImg } from "../../assets";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* HERO LEFT SIDE */}
          <div className="w-full md:basis-2/3">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px] max-md:mt-12"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-heading font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Melese Ayen <br />{" "}
              <span className="text-primary">Web Designer</span> &
              <span className="text-primary"> Developer</span>
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-heading mt-12 font-[500] text-[15px] leading-7  sm:pr-10"
            >
              <span>
                <span className="rounded-full border border-green-400">✔️</span>{" "}
                Detailed-oriented Front End(98%) and Back End(78%) Developer
                with more than 3 years experience working with HTML, CSS,
                Javascript, JQuery, React, TypeScript, Node.js, Express.js,
                MYSQL, mongoDB and Figma. Ready to transform your online
                presence.
              </span>
            </p>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex items-center gap-6 mt-10"
            >
              <a
                href="#work"
                className="text-primary hover:text-smallTextBlur font-[600] text-[16px]  border-b border-smallText border-solid  hover:tex duration-500"
              >
                View portfolio
              </a>

              <div className="flex sm:ml-[10%] gap-10 text-sm text-primary  justify-center items-center">
                <a target="_blank" href="https://github.com/melese-2121">
                  <i className="fab fa-github text-xl cursor-pointer text-primary mr-2  hover:text-smallTextBlur duration-500"></i>
                  Github
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/melese-ayen/"
                >
                  <i className="fab fa-linkedin text-xl mr-2 cursor-pointer text-primary hover:text-smallTextBlur duration-500">
                    {" "}
                  </i>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          {/* HERO RIGHT SIDE */}
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="200"
            className="basis-3/3 mt-10 sm:mt-20 "
          >
            <figure className="flex items-center justify-center">
              <img
                src={hero1}
                alt="Photo"
                className="rounded-tl-[100px] rounded-tr-[2px] border-b-2 "
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
