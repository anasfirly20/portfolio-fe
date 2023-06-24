import React from "react";
import { ReactComponent as ArrowSvg } from "../assets/arrow.svg";
import pdf from "../documents/resume.pdf";

const AboutSection = () => {
  const openPdf = () => {
    window.open(pdf);
  };

  return (
    <section
      className="px-longer2 py-normal flex flex-col items-end gap-3 justify-end"
      id="about"
    >
      <div className="border-2 w-full p-4 lg:w-[65%] lg:p-8 border-gradient-about">
        <p className="whitespace-pre-line">
          As a web developer with a strong foundation in HTML, CSS, and
          JavaScript, and proficiency in React and Tailwind CSS. I am dedicated
          to delivering high-quality work and continuously learning and growing
          in my skills. I am confident in my ability to adapt to new
          technologies and excited to bring my passion for technology and
          problem-solving to every project.
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
