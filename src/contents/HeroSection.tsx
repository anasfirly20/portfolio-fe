import React from "react";

// Assets
import logo from "../assets/anas-logo.webp";

// Misellaneous
import Lottie from "lottie-react";
import scrollLottie from "../assets/scroll-lottie.json";
import { useRef } from "react";

const HeroSection = (): React.JSX.Element => {
  const scrollRef: React.MutableRefObject<any> = useRef();

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center relative px-longer2">
      <img src={logo} alt="brand-logo" className="object-cover aspect-video" />
      <div className="text-[#525252] absolute bottom-1">
        <Lottie
          lottieRef={scrollRef}
          animationData={scrollLottie}
          loop={true}
          className="w-12"
        />
      </div>
    </section>
  );
};

export default HeroSection;
