import React from "react";
import { listInterest } from "@/utils/data";

const Interest = () => {
  return (
    <section className="h-auto w-full">
      <div className="max-w-3xl mx-auto p-24">
        <h1 className="text-4xl font-extrabold mb-6">My Interest</h1>
        {listInterest.map((interest) => (
          <div
            key={interest.title}
            className=" grid grid-cols-[8px_1fr] items-start pb-4 last:mb-0 last:pb-0 gap-3"
          >
            <span
              key={interest.title}
              className="flex h-2 w-2 translate-y-1 rounded-full bg-indigo-500"
            />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {interest.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {interest.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interest;
