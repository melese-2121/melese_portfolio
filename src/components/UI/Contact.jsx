import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import { slideIn } from "../../utils/motion";
import { my_photo } from "../../assets";
import MessageButton from "./MessageButton";

const Contact = () => {
  const inputRef = useRef(null);
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [directContactMethod, setDirectContactMethod] = useState(true);

  () => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  },
    [];

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleContact = () => {
    setDirectContactMethod((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-heading  text-center font-[800] text-[2.4rem] mb-10 mt-10">
        Get in touch
      </h2>
      <div className="container">
        <div className="md:flex justify-between items-center">
          <div data-aos="fade-right" data-aos-duration="1500">
            <div
              className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden lg:h-auto w-full  `}
            >
              {!directContactMethod ? (
                <motion.div
                  variants={slideIn("left", "tween", 0.2, 1)}
                  className="flex-1 bg-black-200  p-8 rounded-2xl  mx-auto bg-smallTextBlur  "
                >
                  <p className="text-zinc-500 mt-1 mx-1 hover:text-white ">
                    Feel free, I will read your message.
                  </p>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex  flex-col gap-1 mt-10 lg:mx-5 "
                  >
                    <label className="flex flex-col font-medium text-zinc-300 text-lg font-sans mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      ref={inputRef}
                      className="bg-black-100 py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    />

                    <label className="flex flex-col text-zinc-300 text-lg font-sans mb-3">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-black-100 py-2 px-6 placeholder:text-secondary text-zinc-200 rounded-lg outline-none border-none font-medium"
                    />

                    <label className="flex flex-col text-zinc-300 text-lg font-sans mb-3">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="text-sm bg-black-100 py-2 px-6 placeholder:text-secondary text-zinc-200 rounded-lg outline-none border-none font-sm"
                    />

                    <div className="flex justify-center items-center w-[75%] mt-5 mb-none mx-auto">
                      <button
                        type="submit"
                        className="py-2 px-4 rounded-xl items-end  border-primary w-full hover:bg-primary bg-opacity-40 outline-none text-white font-bold shadow-md "
                        style={{ border: "1px teal solid" }}
                      >
                        {loading ? "Sending..." : "Send"}
                      </button>
                    </div>
                  </form>
                  <MessageButton
                    toggleContact={toggleContact}
                    directContactMethod={directContactMethod}
                  />
                </motion.div>
              ) : (
                <motion.div
                  variants={slideIn("left", "tween", 0.2, 1)}
                  className="flex-1 bg-black-200   rounded-2xl  mx-auto md:mt-10  "
                >
                  <div className="w-full flex justify-center items-center max-md:mt-3 "></div>
                  <div className=" flex-col justify-start items-start max-sm:ml-5 max-lg:ml-14 lg:ml-24  ">
                    <p className="font-mono text-lg ">
                      <i class="fas fa-phone text-primary mr-5"></i>
                      <span className=" font-mono">+251-943379308</span>
                    </p>
                    <p className="font-mono text-lg mt-5">
                      <i class="far fa-envelope text-primary mr-5"></i>
                      <span className="  font-mono">
                        meleseayen2016@gmail.com
                      </span>
                    </p>
                    <p className="font-mono text-lg mt-5">
                      <i class="fab fa-telegram text-primary mr-5"></i>
                      <span className=" font-mono">@just_me111111</span>
                    </p>
                  </div>
                  <MessageButton
                    toggleContact={toggleContact}
                    directContactMethod={directContactMethod}
                  />
                </motion.div>
              )}
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="w-full md:w-2/5 h-[280px] sm:h-[250px] mt-10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.354770517955!2d38.74428228715821!3d9.032836100000026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85204e431b43%3A0x137bb80c845a5f84!2zQXJhdCBLaWxvIFBhdHJpb3RzIE1vbnVtZW50IHwg4Yqg4Yir4Ym1IOGKquGIjiDhiqDhiK3hiaDhip7hib0g4YiD4YuN4YiN4Ym1!5e0!3m2!1sen!2set!4v1712054298844!5m2!1sen!2set"
              className="border-0 w-full h-full"
              allowfullscreen={true}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
