import React from "react";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import html from "../assets/images/html.png";
import reactImg from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import github from "../assets/images/github.png";
import firebase from "../assets/images/firebase.png";
import deploy from "../assets/images/images.png";

const Skills = () => {
  // Skills data array — keeps JSX clean and makes it easy to add/remove skills
  const skills = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: javascript },
    { name: "React", img: reactImg },
    { name: "Tailwind CSS", img: tailwind },
    { name: "GitHub", img: github },
    { name: "Firebase", img: firebase },
    { name: "Deployment", img: deploy },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0a192f] w-full min-h-screen text-gray-300 py-16 sm:py-20 flex items-center"
    >
      <div className="flex flex-col justify-center mx-auto px-4 sm:px-8 max-w-[1000px] w-full">
        {/* Section heading */}
        <div className="pb-6 sm:pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 text-sm sm:text-base text-[#8892b0]">
            These are the technologies I've worked with
          </p>
        </div>

        {/* Responsive grid: 2 cols on mobile, 3 on sm, 4 on md+ */}
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="shadow-md shadow-[#040c16] rounded-lg p-4 sm:p-6 hover:scale-105 transition-transform duration-300 bg-[#112240]/50"
            >
              <img
                className="w-16 sm:w-20 mx-auto mb-3"
                src={skill.img}
                alt={skill.name}
              />
              <p className="text-sm sm:text-base font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
