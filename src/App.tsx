//Components
import { useEffect, useState } from "react";
import Hero from "@/components/Hero/Hero";
import Ticker from "@/components/Ticker/Ticker";
import Works from "@/components/Works/Works";
import WorksGallery from "@/components/WroksGallery/WroksGallery";
import About from '@/components/About/About';
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";


function App() {
  const [isWorksGalleryVisible, setIsWorksGalleryVisible] = useState(false);

  useEffect(() => {
    if (!isWorksGalleryVisible) return;

    document.getElementById("works-gallery-heading")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [isWorksGalleryVisible]);

  const showWorksGallery = () => {
    if (isWorksGalleryVisible) {
      document.getElementById("works-gallery-heading")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    setIsWorksGalleryVisible(true);
  };

  return (
    <>
      <Hero />
      <Ticker />
      <Works onShowGallery={showWorksGallery} />
      {isWorksGalleryVisible && <WorksGallery />}
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
