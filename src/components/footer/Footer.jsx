import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#7f68f4] text-[#fff] py-12 max-md:-mx-12  md:px-20 -mb-24 -mt-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Melese Ayen</h2>
          <p className="text-sm">4 kill, Addis Ababa, Ethiopia</p>
          <p className="text-sm">meleseayen2016@example.com</p>
          <p className="text-sm">+251-943379308</p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-smallTextBlur ">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-smallTextBlur">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-smallTextBlur">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-smallTextBlur">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Melese Ayen. All rights reserved.
        </p>
        <p className="mt-2">
          Designed and built with <span className="text-red-500">&hearts;</span>{" "}
          by Melese Ayen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
