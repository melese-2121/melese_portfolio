import { backend, frontend, tailwind } from "../../assets";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-heading font-[800] text-[2.4rem] mb-5">
            My Services
          </h2>
          <p className="lg:max-w-[540px] lg:mx-auto text-heading font-[500] text-[16px] leading-7">
            I offer custom website design tailored to reflect your brand
            identity, responsive development, seamless e-commerce solutions,
            robust CMS, performance optimization techniques, and strategic SEO
            implementation. Let's collaborate---reach out today to discuss your
            project needs!
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-2-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              <i className="fas fa-tree text-green-300 text-3xl text-center ml-[2px] -mb-[2px] w-full "></i>
              <div className="hidden absolute w-1 sm:block bg-green-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/* LEFT CARD */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primary duration-500 cursor-pointer ease-in "
                      >
                        <h3 className=" text-primary font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Frontend Development
                        </h3>
                        <p className="text-smallText text-[15px] group-hover:text-white group-hover:font-[500]">
                          Deep understanding of React's component-based
                          architecture, I build robust and scalable web
                          applications that are easy to maintain and extend.
                          Whether it's developing a single-page application
                          (SPA), building a complex user interface, or
                          integrating interactive features, I bring creativity
                          and technical expertise to every project.
                        </p>
                        <div class="flex w-full justify-start mt-3">
                          <i class="fab fa-html5 text-lg mr-4"> </i>
                          <i class="fab fa-css3 text-lg mr-4"></i>
                          <img
                            src={tailwind}
                            alt="Tailwindcss"
                            className="w-4 h-4 rounded-full mr-4 mt-1"
                          />

                          <i class="fab fa-bootstrap text-lg mr-4"></i>
                          <i class="fab fa-react text-lg mr-4"></i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primary border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex justify-center items-center">
                    <figure>
                      <img src={frontend} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* RIGHT CARD */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primary duration-500 cursor-pointer ease-in "
                      >
                        <h3 className=" text-primary font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Backend Development
                        </h3>
                        <p className="text-smallText text-[15px] group-hover:text-white group-hover:font-[500]">
                          Strong grasp of Node.js, Express.js, MongoDB, and
                          MySQL, I craft resilient and scalable backend
                          solutions tailored to your needs. From crafting APIs
                          to managing data, I blend creativity with technical
                          prowess to deliver top-notch web applications.
                        </p>
                        <div class="flex w-full justify-start mt-3">
                          <i class="fab fa-node-js text-xl mr-4"></i>
                          <i class="fas fa-server text-lg mr-4"></i>
                          <i class="fas fa-database text-lg mr-4"></i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primary border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex justify-center items-center">
                    <figure>
                      <img src={backend} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* LEFT SIDE */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primary duration-500 cursor-pointer ease-in "
                      >
                        <h3 className=" text-primary font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Website Designer
                        </h3>
                        <p className="text-smallText text-[15px] group-hover:text-white group-hover:font-[500]">
                          With expertise in Figma's intuitive design tools, I
                          create dynamic digital interfaces that prioritize user
                          experience. From wireframes to prototypes, I ensure
                          every element aligns seamlessly with project goals,
                          delivering captivating designs that resonate with
                          users and stakeholders.
                        </p>
                        <div class="flex w-full justify-start mt-3">
                          <i class="fab fa-figma text-lg"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primary border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex justify-center items-center text-center">
                    <figure>
                      <i class="fas fa-desktop text-lg text-center"></i>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
