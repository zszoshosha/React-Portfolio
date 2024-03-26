import React from "react";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import html from "../assets/images/html.png";
import deploy from "../assets/images/images.png";
import { BiArrowToBottom } from "react-icons/bi";

const Skills = () => {
  let iconStyles = { color: "red", fontSize: "1.5em" };

  return (
    <div name="skills" className=" bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center mx-auto p-4 max-w-[1000px] w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">these are the technologies i've worked with</p>
        </div>
        <div className="grid w-full grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={css} alt="" />
            <p> HTML</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-30 mx-auto" src={javascript} alt="" />
            <p> CSS </p>
          </div>
          <div className=" group shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="" />
            <p> JAVASCRIPT </p>
          </div>
            <div className="  shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={deploy} alt="" />
            <p> deloy </p>

            <BiArrowToBottom style={iconStyles}/>

          </div>
          <div class="">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
