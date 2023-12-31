// Contents
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./contents/HeroSection";
import AboutSection from "./contents/AboutSection";
import ProjectSection from "./contents/ProjectSection";
import ContactSection from "./contents/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = (): React.JSX.Element => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <ScrollToTop />
    </>
  );
};

export default App;
