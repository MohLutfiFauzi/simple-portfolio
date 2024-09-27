import React from "react";
import { Link } from "react-router-dom";

const Awards = () => {
  return (
    <section className="h-[calc(100vh-63px)] w-full">
      <div className="max-w-5xl mx-auto p-24">
        <h1 className="text-4xl font-extrabold mb-6">My Awards</h1>
        <div className=" grid grid-cols-[24px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          <span className="flex h-2 w-2 mt-1.5 translate-y-1 rounded-full bg-indigo-500" />
          <div className="space-y-1">
            <Link
              to="https://drive.google.com/file/d/1zUd0c3TBySKxofZXGyqIAi777s5KNDtx/view"
              className="text-base font-bold underline"
              target="_blank"
            >
              Best SIB (Certified Independent Study) Participant.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
