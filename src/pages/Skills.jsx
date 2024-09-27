import React from "react";
import { Link } from "react-router-dom";

const skills = [
  {
    title: "Frontend Developer Expert.",
    link: "https://www.dicoding.com/certificates/MRZMD51G0ZYQ",
  },
  {
    title: "React Developer Expert.",
    link: "https://www.dicoding.com/certificates/JLX1L945NX72",
  },
  {
    title: "MERN (MongoDB ExpressJS ReactJS NodeJS) Stack.",
    link: "https://drive.google.com/file/d/1oBXeTU-_u65m4ryooGDsmE32cMtvPQcV/view",
  },
  {
    title: "UI/UX Designer.",
    link: "https://drive.google.com/file/d/1SbtCqXgUq7SypdApsEs1b41cE3Lzzr6T/view",
  },
  {
    title: "UI/UX Designer.",
    link: "https://drive.google.com/file/d/1SbtCqXgUq7SypdApsEs1b41cE3Lzzr6T/view",
  },
  {
    title: "Backend Javascript Developer.",
    link: "https://www.dicoding.com/certificates/KEXL35YL4PG2",
  },
];

const Skills = () => {
  return (
    <section className="h-[calc(100vh-63px)] w-full">
      <div className="max-w-5xl mx-auto p-24">
        <h1 className="text-4xl font-extrabold mb-6">My Skills</h1>
        {skills.map((skill) => (
          <div className=" grid grid-cols-[24px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 mt-1.5 translate-y-1 rounded-full bg-indigo-500" />
            <div className="space-y-1">
              <Link
                to={skill.link}
                target="_blank"
                className="text-base font-bold underline"
              >
                {skill.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
