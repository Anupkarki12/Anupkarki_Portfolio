import React from "react";
import Button from "./Button";

const Projects = () => {
  const myProjects = [
    {
      name: "Bookshop Inventory System",
      tech: "Java, MySql",
      gitLink: "https://github.com/Anupkarki12/Bookshop-Inventory-System",
    },
    {
      name: "Food Donation System",
      tech: "HTML, CSS, PHP, MySQL",
      gitLink: "https://github.com/Anupkarki12/food-donation-system",
    },
    {
      name: "Python Practice Collection",
      tech: "Python ",
      gitLink: "https://github.com/Anupkarki12/Pythonpractise",
    },
    {
      name: "Student Management System",
      tech: "React ,Node.js MongoDB",
      gitLink: "https://github.com/Anupkarki12/student-management-system",
    },
    {
      name: "Hotel Booking System",
      tech: "HTML, CSS, PHP, MySQL",
      gitLink: "https://github.com/Anupkarki12/Hotel-booking-system",
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col items-center gap-10 pt-20 text-gray-300"
    >
      <h1 className="text-center text-3xl font-semibold text-cyan-500">
        My Projects
      </h1>
      <div className="grid w-full grid-cols-1 gap-10 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((proj, i) => (
          <div
            key={i}
            className="flex h-auto w-auto flex-col justify-center gap-4 rounded-lg border border-gray-700 p-5"
          >
            <h1 className="text-lg font-semibold md:text-xl">{proj.name}</h1>
            <p className="text-sm md:text-lg">
              Technologies used: {proj.tech}
            </p>
            <a href={proj.gitLink} target="_blank" rel="noopener noreferrer">
              <Button text="View Code" bg="bg-cyan-400" />
            </a>
          </div>
        ))}
      </div>
      <hr className="w-full border border-gray-500" />
    </div>
  );
};

export default Projects;
