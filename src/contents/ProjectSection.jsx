import React from "react";
import { ReactComponent as ArrowSvg } from "../assets/arrow.svg";

// Miscellaneous
import { Icon } from "@iconify/react";

// Constants
import { icons, images, list } from "../components/constants";

const ProjectSection = () => {
  return (
    <section className="px-longer2 py-normal" id="project">
      <h1 className="text-center">Featured Projects</h1>
      <div className="flex justify-center gap-10 mt-8">
        {icons.map((e, i) => (
          <Icon key={i} icon={e.icon} color="#525252" className="text-4xl" />
        ))}
      </div>
      {images.map((e, i) => (
        <section
          key={i}
          className={`max-lg:mt-5 mt-20 flex max-lg:justify-center ${
            i % 2 === 1 && "justify-end"
          }`}
        >
          <div
            className={`w-[430px] h-[580px] relative group flex ${
              i % 2 === 1 ? "" : "flex-row-reverse"
            } `}
          >
            <img
              src={e.img}
              alt=""
              className="object-cover w-full h-full z-10"
            />
            <div className="max-lg:hidden bg-layer absolute inset-0 group-hover:opacity-0 animate500 flex justify-center items-center z-10" />
            <h3
              className={`max-lg:hidden z-10 animate500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-2 px-7 animate border-4 border-project group-hover:border-none group-hover:opacity-0 ${
                i % 2 === 1
                  ? "group-hover:translate-x-[-27rem]"
                  : "group-hover:translate-x-[15rem]"
              }`}
            >
              {e.name}
            </h3>
            {/* MOBILE VERSION START */}
            <div className="opacity-0 hover:opacity-100 animate500 lg:hidden flex flex-col justify-center items-center gap-5 px-10 max-sm:px-5 w-full h-full z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-layer">
              <h2 className="text-center animate500">{e.name}</h2>
              <p className="text-center">{e.desc}</p>
              <ul className="space-y-2">
                {list.map((e, i) => (
                  <li key={i} className="pSmaller2">
                    • {e}
                  </li>
                ))}
              </ul>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={e.link}
                className="border-2 px-6 py-2 border-project"
              >
                Visit Web
              </a>
            </div>
            {/* MOBILE VERSION END */}
            <div
              className={`max-lg:hidden opacity-0 group-hover:opacity-100 self-end absolute h-fit w-[95%] -bottom-5 border-4 border-project animate500 ${
                i % 2 === 1
                  ? "group-hover:translate-x-[-24rem]"
                  : "group-hover:translate-x-[24rem]"
              }`}
            >
              <div className={`flex flex-col py-6 px-12 gap-5`}>
                <div
                  className={`flex justify-between ${
                    i % 2 === 1 && "flex-row-reverse"
                  } `}
                >
                  <h3 className="pBigger">{e.name}</h3>
                  <a target="_blank" rel="noopener noreferrer" href={e.link}>
                    <ArrowSvg
                      className={`w-8 h-8 hover:opacity-60 animate ${
                        i % 2 === 1 && "rotate-180"
                      }`}
                    />
                  </a>
                </div>
                <ul className="space-y-2">
                  {list.map((e, i) => (
                    <li key={i} className="pSmaller2">
                      • {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default ProjectSection;
