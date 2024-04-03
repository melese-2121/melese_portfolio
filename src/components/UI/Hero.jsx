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
              I'm Melese Ayen <br /> Web Designer & Developer
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-heading mt-12 font-[500] text-[15px] leading-7  sm:pr-10"
            >
              <span>
                <i className="fab fa-app-store-ios mr-2"></i>
                Crafting captivating online experiences, website designers and
                developers merge artistic vision with technical expertise.
              </span>
            </p>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex items-center gap-6 mt-10"
            >
              <a
                href="#portfolio"
                className="text-primary hover:text-smallTextBlur font-[600] text-[16px]  border-b border-smallText border-solid  hover:tex duration-500"
              >
                See portfolio
              </a>

              <div class="flex sm:ml-[10%] gap-5">
                <a target="_blank" href="https://github.com/melese-2121">
                  <i class="fab fa-github text-xl cursor-pointer text-primary mr-4 hover:text-smallTextBlur duration-500"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/melese-ayen/"
                >
                  <i class="fab fa-linkedin text-xl cursor-pointer text-primary hover:text-smallTextBlur duration-500"></i>
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
