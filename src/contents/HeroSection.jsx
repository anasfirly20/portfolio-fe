// Assets
import logo from "../assets/anas-logo.png";

// Misellaneous
import Lottie from "lottie-react";
import scrollLottie from "../assets/scroll-lottie.json";
import { useRef } from "react";

const HeroSection = () => {
  const scrollRef = useRef();

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center relative px-longer2">
      <img src={logo} alt="brand-logo" className="object-cover aspect-video" />
      <div className="text-[#525252] absolute bottom-0">
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
