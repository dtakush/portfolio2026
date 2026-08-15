import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { worksSmall } from "@/data/works-gallery";
import { typography } from "@/utils/typography";
import styles from "./WroksGallery.module.scss";

const formatSlideNumber = (number: number) => String(number).padStart(2, "0");

const getCircularDistance = (first: number, second: number, total: number) => {
  const directDistance = Math.abs(first - second);

  return Math.min(directDistance, total - directDistance);
};

const getNearbySlideIndexes = (activeIndex: number, total: number) => [
  (activeIndex - 1 + total) % total,
  activeIndex,
  (activeIndex + 1) % total,
];

function WroksGallery() {
  const [{ activeIndex, loadedSlideIndexes }, setGalleryState] = useState(() => ({
    activeIndex: 0,
    loadedSlideIndexes: new Set(getNearbySlideIndexes(0, worksSmall.length)),
  }));
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
    setGalleryState((currentState) => {
      const nextActiveIndex =
        currentState.activeIndex === 0
          ? worksSmall.length - 1
          : currentState.activeIndex - 1;
      const nextLoadedSlideIndexes = new Set(currentState.loadedSlideIndexes);

      getNearbySlideIndexes(nextActiveIndex, worksSmall.length).forEach((index) => {
        nextLoadedSlideIndexes.add(index);
      });

      return {
        activeIndex: nextActiveIndex,
        loadedSlideIndexes: nextLoadedSlideIndexes,
      };
    });
  };

  const showNext = () => {
    setGalleryState((currentState) => {
      const nextActiveIndex =
        currentState.activeIndex === worksSmall.length - 1
          ? 0
          : currentState.activeIndex + 1;
      const nextLoadedSlideIndexes = new Set(currentState.loadedSlideIndexes);

      getNearbySlideIndexes(nextActiveIndex, worksSmall.length).forEach((index) => {
        nextLoadedSlideIndexes.add(index);
      });

      return {
        activeIndex: nextActiveIndex,
        loadedSlideIndexes: nextLoadedSlideIndexes,
      };
    });
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
      <div className={styles.gallery__heading} id="works-gallery-heading">
        <h2 className={styles.gallery__title} id="works-gallery-title">
          {typography("пасхалка")}
        </h2>
        <p className={styles.gallery__subtitle}>
          {typography("ещё немного работ. потому что остановиться было сложно")}
        </p>
      </div>

      <div
        className={styles.gallery__viewport}
        ref={viewportRef}
        aria-live="polite"
      >
        <div className={styles.gallery__track} style={trackStyle}>
          {worksSmall.map((work, index) => {
            const shouldLoadEagerly =
              getCircularDistance(index, activeIndex, worksSmall.length) <= 1;
            const shouldRenderMedia = loadedSlideIndexes.has(index);

            return (
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
                      src={shouldRenderMedia ? image.src : undefined}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading={shouldLoadEagerly ? "eager" : "lazy"}
                      decoding="async"
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
                      preload={index === activeIndex ? "auto" : "metadata"}
                    />
                  ))}
              </article>
            );
          })}
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
          <p>{typography(activeWork.title)}</p>
          <span>
            {typography(`${formatSlideNumber(activeIndex + 1)} / ${formatSlideNumber(worksSmall.length)}`)}
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
