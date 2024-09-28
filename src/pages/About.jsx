import React from "react";
import Logo from "@/assets/logo.svg";

const About = () => {
  return (
    <section className="h-auto">
      <div className="max-w-full px-4 flex flex-col-reverse items-center justify-between m-auto py-20 gap-20 md:flex-row md:max-w-screen-md md:px-0">
        <div>
          <h1 className="text-2xl font-bold mb-4">
            The Journey of a Lifelong Learner
          </h1>
          <p className="text-base font-normal mb-3 text-justify">
            My story began with a fascination for technology and an endless
            curiosity to understand how things work. I spent countless nights
            teaching myself to code, driven by a passion for solving problems
            and the joy of creating something out of nothing. It was this love
            for learning that laid the foundation for my journey as a
            programmer.
          </p>
          <p className="text-base font-normal mb-3 text-justify">
            My journey as a programmer is far from over. I’m still that curious
            learner, excited by every new challenge, and eager to see where this
            path will lead next.
          </p>
        </div>
        <div className="">
          <img src={Logo} alt="Logo" width={2000} />
        </div>
      </div>
    </section>
  );
};

export default About;
