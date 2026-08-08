import { useState } from "react";
import { experience } from "@/data/experience";
import { typography } from "../../../utils/typography";
import styles from "./Experience.module.scss";

function Experience() {
  const [openItemIds, setOpenItemIds] = useState<Set<number>>(
    () => new Set(experience[0] ? [experience[0].id] : []),
  );

  const toggleItem = (itemId: number) => {
    setOpenItemIds((currentIds) => {
      const nextIds = new Set(currentIds);

      if (nextIds.has(itemId)) {
        nextIds.delete(itemId);
      } else {
        nextIds.add(itemId);
      }

      return nextIds;
    });
  };

  return (
    <section
      className={styles.experience}
      id="experience"
      aria-labelledby="experience-title"
    >

      <div className={styles.experience__heading}>
        <h2 className={styles.experience__title} id="experience-title">
          опыт
        </h2>
        <img
          className={styles.experience__decoration}
          src={`${import.meta.env.BASE_URL}media/images/still_here.svg`}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className={styles.experience__list}>
        {experience.map((item) => {
          const isOpen = openItemIds.has(item.id);
          const descriptionId = `experience-description-${item.id}`;

          return (
            <article
              className={`${styles.experience__item} ${
                isOpen ? styles["experience__item--open"] : ""
              }`}
              key={item.id}
            >
              <button
                className={styles.experience__trigger}
                type="button"
                aria-expanded={isOpen}
                aria-controls={descriptionId}
                onClick={() => toggleItem(item.id)}
              >
                <span className={styles.experience__role}>
                  <span className={styles.experience__position}>
                    {item.position}
                  </span>
                  <span className={styles.experience__company}>
                    {item.company}
                  </span>
                </span>

                <span className={styles.experience__meta}>
                  <span className={styles.experience__period}>
                    {item.period}
                  </span>
                  <img
                    className={styles.experience__chevron}
                    src={`${import.meta.env.BASE_URL}media/images/arrow_description.svg`}
                    alt=""
                    aria-hidden="true"
                  />
                </span>
              </button>

              <div
                className={styles.experience__descriptionWrapper}
                id={descriptionId}
              >
                <div className={styles.experience__descriptionMask}>
                  <ul className={styles.experience__description}>
                    {item.description.map((description) => (
                      <li key={description}>{typography(description)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.experience__bottomLine} aria-hidden="true" />
    </section>
  );
}

export default Experience;
