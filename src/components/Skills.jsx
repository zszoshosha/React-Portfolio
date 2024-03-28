import React, { useState } from "react";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import tailwind from "../assets/images/tailwind.png";
import deploy from "../assets/images/images.png";
import Firebase from "../assets/images/firebase.png";
import material from "../assets/images/material-ui.png"; 
import react from "../assets/images/react.png"; 
import javascript from "../assets/images/javascript.png";
import Jest  from "../assets/images/Jest .png";
import Bootstrap from "../assets/images/Bootstrap .png";

import Githup from "../assets/images/github.png";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
// #eb4b7b -rgb(10 25 47)
const Skills = () => {
  let iconStyles = {
    color: "rgb(241 243 245)",
    fontSize: "26px",
    backgroundColor: "rgb(181 63 105)",
    borderRadius: "50px",
  };

  const [activecss, setActiveCss] = useState(false);
  const handleCardCss = () => setActiveCss(!activecss);
  const [activeJS, setActiveJS] = useState(false);
  const handleCardJs = () => setActiveJS(!activeJS);
  const [active, setActive] = useState(false);
  const handleCard = () => setActive(!active);
  return (
    <div name="skills" className=" bg-[#0a192f] w-full min-h-[700px] text-gray-300 flex flex-col">
      <div className="flex flex-col justify-center mx-auto p-4 max-w-[1000px] w-full h-screen">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">these are the technologies i've worked with</p>
        </div>
        <div className="grid w-full grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          {/* card div for html */}
          <div
            onClick={handleCard}
            className=" shadow-md shadow-[#eb4b7b] hover:scale-110 duration-500 p-4 group py-auto max-h-40"
          >
            <img className="w-20 mx-auto" src={html} alt="" />
            <div className="flex pt-6 justify-between items-center">
              <p className=" text-2xl"> html </p>
            </div>
          </div>
          {/* card div for css */}
          <div
            onClick={handleCardCss}
            className=" shadow-md shadow-[#eb4b7b] hover:scale-110 duration-500 p-4 group py-auto"
          >
            <img className="w-20 mx-auto" src={css} alt="" />
            {/* div for navlist */}
            <div
              className={
                !activecss
                  ? "hidden"
                  : "flex flex-col w-full h-auto bg-auto duration-1000 "
              }
            >
              <div className="flex mt-4 justify-between items-center  ">
                <p className=" text-xl">Tailwind</p>
                <img className="w-8 h-8 " src={tailwind} alt="" />
              </div>
              <div className="flex mt-2 justify-between items-center ">
                <p className=" text-xl">Bootstrap</p>
                <img className="w-9  h-13" src={Bootstrap} alt="" />
              </div>
              <div className="flex mt-2 justify-between items-center ">
                <p className=" text-xl">Material ui</p>
                <img className="w-8 h-8" src={material} alt="" />
              </div>
            </div>
            <div className="flex pt-6 justify-between items-center">
              <p className=" text-2xl"> CSS </p>
              {!activecss ? (
                <BiArrowToBottom
                  style={iconStyles}
                  className="group-click:rotate-180 transition duration-500"
                />
              ) : (
                <BiArrowToTop
                  style={iconStyles}
                  className="group-click:rotate-180 transition duration-500"
                />
              )}
            </div>
          </div>
          {/* card div for javascript */}
          <div
            onClick={handleCardJs}
            className=" shadow-md shadow-[#eb4b7b] hover:scale-110 duration-500 p-4 group py-auto h-fit "
          >
            <img className="w-20 mx-auto" src={javascript} alt="" />
            {/* div for navlist */}
            <div
              className={
                !activeJS
                  ? "hidden"
                  : "flex flex-col w-full h-auto bg-auto duration-1000 "
              }
            >
              <div className="flex mt-4 justify-between flex-auto  ">
                <p className=" text-xl">React</p>
                <img className="w-8 h-8 " src={react} alt="" />
              </div>
              <div className="flex mt-4 justify-between flex-auto  ">
                <p className=" text-xl">Jest </p>
                <img className="w-8 h-8 " src={Jest } alt="" />
              </div>

            </div>
            <div className="flex pt-6 justify-between items-center flex-none">
              <p className=" text-2xl"> Javascript </p>
              {!activeJS ? (
                <BiArrowToBottom
                  style={iconStyles}
                  className="group-click:rotate-180 transition duration-500"
                />
              ) : (
                <BiArrowToTop
                  style={iconStyles}
                  className="group-click:rotate-180 transition duration-500"
                />
              )}
            </div>
          </div>
          {/* card div for deply */}
          <div
            onClick={handleCard}
            className=" shadow-md shadow-[#eb4b7b] hover:scale-110 duration-500 p-4 group py-auto h-fit"
          >
            <img className="w-20 mx-auto" src={deploy} alt="" />
            {/* div for navlist */}
            <div
              className={
                !active
                  ? "hidden"
                  : "flex flex-col w-full h-auto bg-auto duration-1000"
              }
            >
              <div className="flex mt-4 justify-between  ">
                <p className=" text-xl">Githup</p>
                <img className="w-8 h-8 " src={Githup} alt="" />
              </div>
              <div className="flex mt-2 justify-between ">
                <p className=" text-xl">Firebase</p>
                <img className="w-8 h-8 " src={Firebase} alt="" />
              </div>
            </div>
            <div className="flex pt-6 justify-between items-center">
              <p className=" text-2xl"> Deploy </p>
              {!active ? (
                <BiArrowToBottom
                  style={iconStyles}
                  className="group-click:rotate-180 transition duration-500"
                />
              ) : (
                <BiArrowToTop
                  style={iconStyles}
                  className="group-click:rotate-180 transition duration-500"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
