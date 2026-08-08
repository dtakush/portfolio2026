import { education } from "@/data/education";
import { typography } from "../../../utils/typography";
import styles from "./Education.module.scss";

function Education() {
  return (
    <section
      className={styles.education}
      id="education"
      aria-labelledby="education-title"
    >

      <h2 className={styles.education__title} id="education-title">
        <span>образо</span>
        <span>вание</span>
      </h2>

      <div className={styles.education__list}>
        {education.map((item) => (
          <article
            className={styles.education__item}
            key={`${item.id}-${item.title}`}
          >
            <div className={styles.education__info}>
              <h3 className={styles.education__name}>
                {typography(item.title)}
              </h3>
              <p className={styles.education__place}>
                {typography(item.subtitle)}
              </p>
            </div>

            <p className={styles.education__period}>
              {typography(item.period)}
            </p>
          </article>
        ))}
      </div>

      <div className={styles.education__ending}>
        <img
          className={styles.education__levelEnd}
          src={`${import.meta.env.BASE_URL}media/images/level_end.svg`}
          alt=""
          aria-hidden="true"
        />
        <div className={styles.education__bottomLine} aria-hidden="true" />
      </div>
    </section>
  );
}

export default Education;
