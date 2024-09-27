import React from "react";
import { frontendServices } from "@/utils/data";
function Landing() {
  return (
    <>
      <section className="h-[calc(100vh-63px)] flex items-center">
        <h1 className="scroll-m-20 px-4 md:px-24 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hi, I'm Lutfi. <br /> I'm a Frontend Developer <br /> based in
          Indonesia.
        </h1>
      </section>
      <section className="h-auto border-t p-20">
        <h2 className="font-bold text-4xl mb-20">What I do ?</h2>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
          {frontendServices.map((service, index) => (
            <div className="border-b border-indigo-500">
              <h3 className="font-bold text-base mb-3">{index + 1}</h3>
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="mb-7">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Landing;
