import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#0a192f] w-full min-h-screen px-4 sm:px-8 flex items-center"
    >
      {/* Main content container — vertically centered with responsive left padding */}
      <div className="flex flex-col justify-center w-full max-w-[1200px] mx-auto pt-[80px] md:pl-8 lg:pl-[100px]">
        <p className="text-pink-600 text-sm sm:text-base md:text-lg font-medium mb-2">
          Hi there, welcome to my portfolio
        </p>

        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] leading-tight">
          My name is Zezo Magdy
        </h1>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8892b0] mt-2 sm:mt-4 leading-tight">
          I'm a{" "}
          <span className="text-pink-600 block sm:inline">
            Front-End Developer
          </span>
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[600px] text-sm sm:text-base leading-relaxed">
          Passionate about creating interactive, responsive web applications
          with clean code and delightful user experiences. Let's build something
          amazing together.
        </p>

        <div>
          <a href="#work">
            <button className="text-white group border-2 border-gray-300 px-5 sm:px-6 py-2.5 sm:py-3 my-2 flex items-center rounded-md hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 text-sm sm:text-base font-medium">
              View Work
              {/* Arrow rotates on hover via group-hover for a smooth indicator */}
              <span className="group-hover:rotate-90 transition-transform duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
