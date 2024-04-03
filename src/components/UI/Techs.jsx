import React from "react";
import {
  bootstrap2,
  creator,
  css2,
  tailwind2,
  express,
  html2,
  javascript2,
  mobile,
  mongodb2,
  mysql,
  node,
  react,
  reactbootstrap,
  sequelize,
} from "../../assets";

const Techs = () => {
  const images = [
    html2,
    css2,
    tailwind2,
    bootstrap2,
    reactbootstrap,
    react,
    javascript2,
    node,
    express,
    sequelize,
    mysql,
    mongodb2,
  ];
  return (
    <section className="">
      <h2 className="text-heading  text-center font-[800] text-[2.4rem] mb-16 mt-10">
        Technologies
      </h2>
      <div className="  text-center  mx-auto sm:px-6 lg:px-8 ">
        <div className="pl-10 md:pl-20 grid grid-cols-3 sm:grid-cols-4  lg:grid-cols-5 gap-5 gap-y-10 text-center mx-auto ">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              className="w-14 h-auto"
              src={imageUrl}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techs;
