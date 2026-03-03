import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center py-16 sm:py-20"
    >
      <div className="flex flex-col justify-center items-center w-full max-w-[1000px] mx-auto px-4 sm:px-8">
        {/* Section heading with accent underline */}
        <div className="w-full pb-6 sm:pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600">
            About
          </p>
        </div>

        {/* Two-column layout on sm+, stacks to single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            <p>
              Hi, I'm Zezo Magdy. Nice to meet you. Please take a look around.
            </p>
          </div>
          <div className="text-sm sm:text-base text-[#8892b0] leading-relaxed">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. I'm always interested in
              working on ambitious projects with positive people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
