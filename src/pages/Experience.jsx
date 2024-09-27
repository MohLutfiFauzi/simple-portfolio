import React from "react";

const Experience = () => {
  return (
    <section className="h-auto w-full">
      <div className="max-w-5xl mx-auto p-24">
        <h1 className="text-4xl font-extrabold ">My Experience</h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="mt-14">
            <h2 className="text-3xl font-extrabold">2024</h2>
            <div className="mt-4 grid grid-cols-[14px_1fr] items-start pb-4 last:mb-0 last:pb-0 gap-3">
              <span className="flex h-2 w-2 mt-1.5 translate-y-1 rounded-full bg-indigo-500" />
              <div className="space-y-1">
                <p className="text-sm font-sm leading-5">
                  React Developer at Infosys Solusi Terpadu, Writing code to
                  develop software or applications using ReactJS.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <h2 className="text-3xl font-extrabold">2023</h2>
            <div className="mt-4 grid grid-cols-[14px_1fr] items-start pb-4 last:mb-0 last:pb-0 gap-3">
              <span className="flex h-2 w-2 mt-1.5 translate-y-1 rounded-full bg-indigo-500" />
              <div className="space-y-1">
                <p className="text-sm font-sm leading-5">
                  Mentor Frontend & Backend at Dicoding x Kampus Merdeka,
                  Managing forums or discussion spaces to facilitate discussions
                  among participants.
                </p>
              </div>
              <span className="flex h-2 w-2 mt-1.5 translate-y-1 rounded-full bg-indigo-500" />
              <div className="space-y-1">
                <p className="text-sm font-sm leading-5">
                  Fullstack Developer at Cianjur Ekspres, Writing computer code
                  to develop software or applications using the NextJS
                  framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
