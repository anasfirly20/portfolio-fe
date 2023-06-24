import React from "react";

// Miscellaneous
import { Icon } from "@iconify/react";

// Assets
import belinsky from "../assets/Belinsky.webp";
import turta from "../assets/Turta.webp";
import kima from "../assets/Kima.webp";

const ProjectSection = () => {
  const icons = [
    {
      icon: "simple-icons:javascript",
    },
    {
      icon: "simple-icons:typescript",
    },
    {
      icon: "simple-icons:react",
    },
    {
      icon: "simple-icons:redux",
    },
    {
      icon: "simple-icons:tailwindcss",
    },
    {
      icon: "simple-icons:antdesign",
    },
    {
      icon: "simple-icons:mui",
    },
    {
      icon: "tabler:brand-framer-motion",
    },
    {
      icon: "simple-icons:git",
    },
    {
      icon: "simple-icons:axios",
    },
    {
      icon: "simple-icons:vite",
    },
  ];

  const images = [
    {
      name: "Belinsky Studio",
      img: belinsky,
    },
    {
      name: "TurunTangan",
      img: turta,
    },
    {
      name: "KIMA",
      img: kima,
    },
  ];

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
          <div className="w-[430px] h-[580px] relative group">
            <img src={e.img} alt="" className="object-cover w-full h-full" />
            <div className="bg-layer absolute inset-0 group-hover:opacity-0 animate500 flex justify-center items-center"></div>
            <h3
              className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-2 px-7 border-4 border-project animate group-hover:border-hidden ${
                i % 2 === 1
                  ? "group-hover:translate-x-[-27rem]"
                  : "group-hover:translate-x-[15rem]"
              }`}
            >
              {e.name}
            </h3>
          </div>
        </section>
      ))}
    </section>
  );
};

export default ProjectSection;