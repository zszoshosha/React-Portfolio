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
              about
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid max-w-[1000px] w-full sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right text-4xl font-bold">
            <p >
              Hi , iam clint ,nice to meet you , please take a look around
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              cumque voluptatum, doloribus optio, labore tempora officiis
              delectus eligendi placeat expedita dolorum? Cum non tenetur
              accusamus itaque vitae? Mollitia, sint possimus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
