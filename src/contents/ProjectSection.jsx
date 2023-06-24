import React from "react";
import { ReactComponent as ArrowSvg } from "../assets/arrow.svg";

// Miscellaneous
import { Icon } from "@iconify/react";

// Constants
import { icons, images, list } from "../components/constants";

const ProjectSection = () => {
  return (
    <section className="px-longer2 py-normal">
      <h1 className="text-center text-4xl font-medium">Featured Projects</h1>
      <div className="flex justify-center gap-10 mt-8">
        {icons.map((e, i) => (
          <Icon key={i} icon={e.icon} color="#525252" className="text-4xl" />
        ))}
      </div>
      {images.map((e, i) => (
        <section className={`mt-20 flex ${i % 2 === 1 && "justify-end"}`}>
          <div
            className={`w-[430px] h-[580px] relative group flex ${
              i % 2 === 1 ? "" : "flex-row-reverse"
            }`}
          >
            <img src={e.img} alt="" className="object-cover w-full h-full" />
            <div className="bg-layer absolute inset-0 group-hover:opacity-0 animate500 flex justify-center items-center"></div>
            <h3
              className={`animate500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-2 px-7 animate border-4 border-project group-hover:border-none group-hover:opacity-0 ${
                i % 2 === 1
                  ? "group-hover:translate-x-[-27rem]"
                  : "group-hover:translate-x-[15rem]"
              }`}
            >
              {e.name}
            </h3>
            <div
              className={`opacity-0 group-hover:opacity-100 self-end absolute h-[60%] w-[85%] -bottom-5 border-4 border-project animate500 ${
                i % 2 === 1
                  ? "border-r-0 group-hover:translate-x-[-22rem]"
                  : "border-l-0 group-hover:translate-x-[22rem]"
              }`}
            >
              <div
                className={`flex flex-col py-3 gap-3 ${
                  i % 2 === 1 ? "px-6" : "px-12"
                }`}
              >
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
                  {list.map((e) => (
                    <li className="pSmaller2">• {e}</li>
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
