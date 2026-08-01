//Components
import { useEffect, useState } from "react";
import Hero from "@/components/Hero/Hero";
import Ticker from "@/components/Ticker/Ticker";
import Works from "@/components/Works/Works";
import WorksGallery from "@/components/WroksGallery/WroksGallery";


function App() {
  const [isWorksGalleryVisible, setIsWorksGalleryVisible] = useState(false);

  useEffect(() => {
    if (!isWorksGalleryVisible) return;

    document.getElementById("works-gallery")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [isWorksGalleryVisible]);

  const showWorksGallery = () => {
    if (isWorksGalleryVisible) {
      document.getElementById("works-gallery")?.scrollIntoView({
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

    </>
  );
}

export default App;
