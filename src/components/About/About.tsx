import styles from "./About.module.scss";
import { typography } from "../../../utils/typography";

const facts = [
  "12+ лет в дизайне",
  "ментор младших дизайнеров",
  "интегрирую ai в рабочие процессы",
  "сокращаю производство шаблонами и системами >30%",
  "оптимизировала создание 3500+ материалов в квартал",
];

function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={styles.about__line} aria-hidden="true" />

      <div className={styles.about__heading}>
        <h2 className={styles.about__title} id="about-title">
          <span>обо мне</span>
          <img
            className={styles.about__arrow}
            src={`${import.meta.env.BASE_URL}media/images/arrow.svg`}
            alt="arrow"
            aria-hidden="true"
          />
        </h2>
      </div>

      <div className={styles.about__content}>
        <ul className={styles.about__facts} aria-label="Факты обо мне">
          {facts.map((fact) => (
            <li className={styles.about__fact} key={fact}>
              {fact}
            </li>
          ))}
        </ul>

        <div className={styles.about__description}>
          <p>
            {typography("больше 12 лет работаю с международными и российскими брендами, запускала рекламные кампании, выстраивала дизайн-системы и производственные процессы.")}
          </p>

          <p>
            {typography("люблю создавать не только красивый дизайн, но и понятные системы, которые помогают команде работать быстрее и эффективнее.")}
          </p>
        </div>
      </div>

      <div className={styles.about__line} aria-hidden="true" />
    </section>
  );
}

export default About;
