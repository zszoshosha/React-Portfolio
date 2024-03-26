import React from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { HiOutlineMail } from "react-icons/hi";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNAv = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo" style={{ width: "fit-content ", height: "80px" }} />
      </div>
      {/* menu */}
      <ul className=" hidden md:flex cursor-pointer text-xl font-bold ">
        <li className="px-4 hover:text-pink-600 ">Home</li>
        <li className="px-4 hover:text-pink-600 ">About</li>
        <li className="px-4 hover:text-pink-600 ">Skills </li>
        <li className="px-4  hover:text-pink-600">Work</li>
        <li className="px-4 hover:text-pink-600">Content</li>
      </ul>
      {/* hamburger */}
      <div
        onClick={handleNAv}
        className="md:hidden z-10 cursor-pointer text-3xl hover:text-pink-600"
      >
        {" "}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobilemenu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute flex flex-col top-0 left-0 bg-[#0a192f] w-full h-screen justify-center items-center"
        }
      >
        <ul className=" cursor-pointer text-3xl font-bold ">
          <li className="py-6 hover:text-pink-600 hover: ">Home</li>
          <li className="py-6 hover:text-pink-600 ">About</li>
          <li className="py-6 hover:text-pink-600 ">Skills </li>
          <li className="py-6  hover:text-pink-600">Work</li>
          <li className="py-6 hover:text-pink-600">Content</li>
        </ul>
      </div>
      {/* social links */}
      <div className=" hidden md:flex fixed flex-col left-0 top-[35%]">
      <ul>
          <li className="flex w-[160px] h-[50px] justify-between items-center  ml-[-95px] hover:ml-[4px] duration-300 ">
            <a
              className=" rounded-lg flex justify-evenly items-center w-full h-full text-gray-300  bg-blue-600"
              href="https://www.linkedin.com/in/zezo-shosha-922181239/"
            >
         <p className="text-lg font-bold">Linkedin</p> <FaLinkedin size={25} />
            </a>
          </li>
          <li className="flex w-[160px] h-[50px] justify-between items-center  ml-[-95px] hover:ml-[4px] duration-300 ">
            <a
              className=" rounded-lg flex justify-evenly items-center w-full h-full text-gray-300  bg-[#333333]"
              href="https://github.com/zszoshosha"
            >
         <p className="text-lg font-bold">Github</p> <FaGithub size={30} />
            </a>
          </li>
          <li className="flex w-[160px] h-[50px] justify-between items-center  ml-[-95px] hover:ml-[4px] duration-300 ">
            <a
              className=" rounded-lg flex justify-evenly items-center w-full h-full text-gray-300  bg-[#6fc2be]"
              href="mailto:zshosha424@gmail.com"
            >
         <p className="text-lg font-bold">Email</p> <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="flex w-[160px] h-[50px] justify-between items-center  ml-[-95px] hover:ml-[4px] duration-300 ">
            <a
              className=" rounded-lg flex justify-evenly items-center w-full h-full text-gray-300  bg-[#565f69]"
              href="/"
            >
         <p className="text-lg font-bold">Resume</p> <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
