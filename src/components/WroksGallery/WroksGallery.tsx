import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { worksSmall } from "@/data/works-gallery";
import styles from "./WroksGallery.module.scss";

const formatSlideNumber = (number: number) => String(number).padStart(2, "0");

function WroksGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeWork = worksSmall[activeIndex];

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const activeSlide = slideRefs.current[activeIndex];

    if (!viewport || !activeSlide) return;

    const centerActiveSlide = () => {
      setTrackOffset(
        activeSlide.offsetLeft -
          (viewport.clientWidth - activeSlide.offsetWidth) / 2,
      );
    };

    centerActiveSlide();

    const resizeObserver = new ResizeObserver(centerActiveSlide);
    resizeObserver.observe(viewport);
    resizeObserver.observe(activeSlide);

    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? worksSmall.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === worksSmall.length - 1 ? 0 : current + 1,
    );
  };

  const trackStyle = {
    "--slide-offset": `${trackOffset}px`,
  } as CSSProperties;

  return (
    <section
      className={styles.gallery}
      id="works-gallery"
      aria-labelledby="works-gallery-title"
    >
      <div className={styles.gallery__heading}>
        <h2 className={styles.gallery__title} id="works-gallery-title">
          пасхалка
        </h2>
        <p className={styles.gallery__subtitle}>
          ещё немного работ. потому что остановиться было сложно
        </p>
      </div>

      <div
        className={styles.gallery__viewport}
        ref={viewportRef}
        aria-live="polite"
      >
        <div className={styles.gallery__track} style={trackStyle}>
          {worksSmall.map((work, index) => (
            <article
              className={`${styles.gallery__slide} ${
                index === activeIndex ? styles["gallery__slide--active"] : ""
              }`}
              key={work.id}
              ref={(slide) => {
                slideRefs.current[index] = slide;
              }}
              aria-hidden={index !== activeIndex}
            >
              {work.images
                .filter((image) => image.src)
                .map((image) => (
                  <img
                    className={styles.gallery__media}
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}

              {work.video
                .filter((video) => video.src)
                .map((video) => (
                  <video
                    className={styles.gallery__media}
                    key={video.id}
                    ref={(videoElement) => {
                      videoRefs.current[index] = videoElement;
                    }}
                    src={video.src}
                    aria-label={video.alt}
                    autoPlay={index === activeIndex}
                    controls
                    loop
                    muted
                    playsInline
                  />
                ))}
            </article>
          ))}
        </div>
      </div>

      <div className={styles.gallery__controls}>
        <button
          className={`${styles.gallery__arrow} ${styles["gallery__arrow--previous"]}`}
          type="button"
          aria-label="Предыдущий слайд"
          onClick={showPrevious}
        />

        <div className={styles.gallery__caption}>
          <p>{activeWork.title}</p>
          <span>
            {formatSlideNumber(activeIndex + 1)} / {formatSlideNumber(worksSmall.length)}
          </span>
        </div>

        <button
          className={`${styles.gallery__arrow} ${styles["gallery__arrow--next"]}`}
          type="button"
          aria-label="Следующий слайд"
          onClick={showNext}
        />
      </div>
    </section>
  );
}

export default WroksGallery;
