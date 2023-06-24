import React from "react";

// Miscellaneous
import { Icon } from "@iconify/react";

const icons = [
  {
    icon: "mdi:email",
    link: "mailto:anasfirly20@gmail.com",
  },
  {
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/anasfirly20/",
  },
  {
    icon: "mdi:whatsapp",
    link: "https://wa.me/89625556174",
  },
  {
    icon: "ic:baseline-telegram",
    link: "https://t.me/+79625556174",
  },
];

const Contact = () => {
  return (
    <section
      className="px-longer2 py-normal text-center space-y-10"
      id="contact"
    >
      <h1 className="">Contact Me</h1>
      <p>
        I am actively seeking new opportunities at the moment and would be open
        to hearing about any potential <br /> opportunities that may be
        available. Please feel free to reach out to me if you have any leads or
        if you would <br /> like to discuss potential collaborations.
      </p>
      <div className="flex justify-center items-center gap-3">
        {icons.map((e, i) => (
          <a key={i} target="_blank" rel="noopener noreferrer" href={e.link}>
            <Icon
              icon={e.icon}
              className="text-4xl text-[#525252] hover:text-white hover:cursor-pointer hover:scale-110 animate500"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
