import { useState } from "react";
import { works } from "@/data/works";
import { typography } from "@/utils/typography";
import styles from "./Works.module.scss";

interface WorksProps {
  onShowGallery: () => void;
}

function Works({ onShowGallery }: WorksProps) {
  const [activeSlug, setActiveSlug] = useState(works[0].slug);
  const activeWork = works.find((work) => work.slug === activeSlug) ?? works[0];

  return (
    <section className={styles.works} id="works" aria-labelledby="works-title">
      <h2 className={styles.works__title} id="works-title">
        {typography("работы")}
      </h2>

      <div className={styles.works__tabs} role="tablist" aria-label="Проекты">
        {works.map((work) => {
          const isActive = work.slug === activeSlug;

          return (
            <button
              className={`${styles.works__tab} ${
                isActive ? styles["works__tab--active"] : ""
              }`}
              id={`${work.slug}-tab`}
              key={work.id}
              role="tab"
              type="button"
              aria-controls={`${work.slug}-panel`}
              aria-selected={isActive}
              onClick={() => setActiveSlug(work.slug)}
            >
              <span className={styles.works__tabLabel}>
                {typography(work.title)}

                {isActive && (
                  <img
                    className={styles.works__tabSelection}
                    src={work.selectionSrc}
                    alt=""
                    aria-hidden="true"
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>

      <article
        className={styles.works__project}
        id={`${activeWork.slug}-panel`}
        role="tabpanel"
        aria-labelledby={`${activeWork.slug}-tab`}
      >
        <div className={styles.works__details}>
          <h3 className={styles.works__projectTitle}>
            {typography(activeWork.subtitle)}
          </h3>

          <div className={styles.works__description}>
            {activeWork.description.map((paragraph) => (
              <p key={paragraph}>{typography(paragraph)}</p>
            ))}
          </div>

          <dl className={styles.works__meta}>
            <div className={styles.works__metaItem}>
              <dt>{typography("роль")}</dt>
              <dd>{typography(activeWork.role)}</dd>
            </div>
            <div className={styles.works__metaItem}>
              <dt>{typography("инструменты")}</dt>
              <dd>{typography(activeWork.tools)}</dd>
            </div>
          </dl>

          <div className={styles.works__results}>
            <h4>{typography("результат")}</h4>
            <ul>
              {activeWork.results.map((result) => (
                <li key={result}>{typography(result)}</li>
              ))}
            </ul>
          </div>

          <button
            className={styles.works__moreButton}
            type="button"
            aria-label="Больше работ"
            aria-controls="works-gallery"
            onClick={onShowGallery}
          />
        </div>

        <div
          className={`${styles.works__gallery} ${
            activeWork.slug === "citydrive"
              ? styles["works__gallery--citydrive"]
              : activeWork.images.length === 1
                ? styles["works__gallery--oneImage"]
                : activeWork.images.length === 2
                  ? styles["works__gallery--twoImages"]
                  : ""
          }`}
        >
          {activeWork.images.map((image) => (
            <img
              className={styles.works__image}
              key={`${image.id}-${image.src}`}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
          ))}

          {activeWork.slug === "megamarket" && (
            <>
              <img
                className={`${styles.works__decoration} ${styles["works__decoration--plusFirst"]}`}
                src={`${import.meta.env.BASE_URL}media/images/plus.svg`}
                alt=""
                aria-hidden="true"
              />
              <img
                className={`${styles.works__decoration} ${styles["works__decoration--plusSecond"]}`}
                src={`${import.meta.env.BASE_URL}media/images/plus.svg`}
                alt=""
                aria-hidden="true"
              />
              <img
                className={`${styles.works__decoration} ${styles["works__decoration--arrow"]}`}
                src={`${import.meta.env.BASE_URL}media/images/arrow.svg`}
                alt=""
                aria-hidden="true"
              />
            </>
          )}

          {activeWork.slug === "citydrive" && (
            <>
              <img
                className={`${styles.works__decoration} ${styles["works__decoration--cityPlus"]}`}
                src={`${import.meta.env.BASE_URL}media/images/plus.svg`}
                alt=""
                aria-hidden="true"
              />
              <img
                className={`${styles.works__decoration} ${styles["works__decoration--cityArrow"]}`}
                src={`${import.meta.env.BASE_URL}media/images/arrow.svg`}
                alt=""
                aria-hidden="true"
              />
            </>
          )}

          {activeWork.video
            .filter((video) => video.src)
            .map((video) => (
              <video
                key={video.src}
                className={styles.works__video}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            ))}
        </div>
      </article>
    </section>
  );
}

export default Works;
