import React from "react";

// Miscellaneous
import { Icon } from "@iconify/react";

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

  return (
    <section className="px-longer2 py-normal">
      <h1 className="text-center text-4xl font-medium">Featured Projects</h1>
      <div className="flex justify-center gap-10 mt-8">
        {icons.map((e, i) => (
          <Icon key={i} icon={e.icon} color="#525252" className="text-4xl" />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
