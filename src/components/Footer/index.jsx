import React from "react";

const index = () => {
  return (
    <footer className="h-[63px] border-t flex items-center justify-center md:justify-start">
      <h4 className="md:ml-20 ">
        Built by{" "}
        <a
          href="https://github.com/MohLutfiFauzi"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Lutfi.
        </a>{" "}
        The source code is available on{" "}
        <a
          href="https://github.com/MohLutfiFauzi/simple-portfolio"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          GitHub.
        </a>
      </h4>
    </footer>
  );
};

export default index;
