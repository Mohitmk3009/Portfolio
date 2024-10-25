
"use client";
import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Image from "next/image";
import autocad from '../assets/autocad.svg'
import staruml from '../assets/staruml.svg'

const skillsData = {
  Languages: [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Typescript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
  ],
  "UI/UX Design": [
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Adobe XD",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg",
    },
    {
      name: "Photoshop",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
    },
    {
      name: "Illustrator",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    },
    {
      name: "Canva",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
  ],
  "Frontend Development": [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Nextjs",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "React Native",
      logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
  ],
  "Backend Development": [
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
  ],
  Database: [
    {
      name: "Mongo DB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    },
    {
      name: "My SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
  ],
  "Tools and Others": [
    {
      name: "Github",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Vs code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Postman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Premiere Pro",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
    },
    {
      name: "Auto CAD",
      logo: autocad,
    },
    
    {
      name: "Star UML",
      logo: staruml,
    },
  ],
};

const Skills = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section className="bg-black text-white mb-[-40px]  ">
      <div className="container mx-auto max-w-fit">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="mb-10">
            <h3 className="lg:text-2xl text-xl font-semibold text-left mb-5 mt-2 uppercase">{category}</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 justify-center lg:gap-20 gap-10 ">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="   rounded-xl shadow-lg w-fit transform transition duration-300 justify-center  flex flex-col items-center overflow-hidden hover:scale-105 relative"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <div className="bg-white lg:p-8 p-4 rounded-xl shadow-lg w-fit transform transition  duration-300 justify-center flex flex-col items-center overflow-hidden hover:scale-105 relative">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="lg:w-24 lg:h-24 w-12 h-12 transition-transform duration-300 transform  hover:scale-110 bg-transparent"
                    />
                    {/* Skill name displayed in the center with a black background and opacity */}
                    <span className="absolute inset-0 flex items-center justify-center text-white lg:text-xl  text-sm font-semibold bg-black bg-opacity-70  rounded-lg transition-opacity duration-300 opacity-0 hover:opacity-100">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
