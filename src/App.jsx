import { useEffect, useState } from "react";
import Aos from "aos";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Works from "./components/UI/Works";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    Aos.init();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(section.id);
      }
    });
  };

  return (
    <div className="px-10  lg:px-[10%]">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Services />
        <Works />
      </main>
      <Footer />
    </div>
  );
}

export default App;
