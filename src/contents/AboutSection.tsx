import React from "react";
import { ReactComponent as ArrowSvg } from "../assets/arrow.svg";
import resumePdf from "../documents/Anasfirly_Resume.pdf";

const AboutSection = (): React.JSX.Element => {
  const openPdf = (): void => {
    window.open(resumePdf);
  };

  return (
    <section
      className="px-longer2 py-normal flex flex-col items-end gap-3 justify-end"
      id="about"
    >
      <div className="border-2 w-full p-4 lg:w-[65%] lg:p-8 border-gradient-about">
        <p className="whitespace-pre-line">
          I am a frontend developer using TypeScript, React JS, and React
          Native. I am experienced in implementing web design based on figma
          designs to integrating APIs using tools like Axios. In addition, I
          have used Redux to manage complex application states. With my
          expertise in writing type-safe code and my proficiency in these
          technologies, I can help build robust and scalable front-end solutions
          for any project.
        </p>
      </div>
      <div
        className="pr-shorter4 flex items-center gap-3 hover:cursor-pointer hover:opacity-60 animate"
        onClick={openPdf}
      >
        <p className="uppercase text-lg">resume</p>
        <ArrowSvg className="w-8 h-8" />
      </div>
    </section>
  );
};

export default AboutSection;
