import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 z-10"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="grid max-w-[1000px] w-full grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid max-w-[1000px] w-full sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello. i'm Zezo nice to meet you, please take a look around </p>
          </div>
          <div>
            <p>
              I possess a strong foundation in JavaScript and have developed two
              projects utilizing React framework. Committed to continuous
              learning, I am currently expanding my skill set by exploring
              additional frameworks and technologies to enhance my expertise.
              With a passion for crafting intuitive user interfaces and a
              dedication to delivering high-quality code, I am eager to
              contribute to innovative projects and further develop my career in
              frontend development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
