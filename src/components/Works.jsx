import React from "react";
import workOne from "../assets/images/workOne.jpg";
import workTwo from "../assets/images/workTwo.jpg";
const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Works
          </p>
          <p className="py-4"> //check out some of my recent work </p>
        </div>

        {/* contaier div */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* card div */}
          <div
            style={{ background: `url(${workTwo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover div */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                3D PORTFOLIO
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ background: `url(${workOne})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover div */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                WEBSITE FOR BANK
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
