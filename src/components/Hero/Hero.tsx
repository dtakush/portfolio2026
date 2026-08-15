import { typography } from "@/utils/typography";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <nav className={styles.hero__menu} aria-label="Основная навигация">
        <a className={styles.hero__menuLink} href="#works">
          {typography("работы")}
        </a>
        <a className={styles.hero__menuLink} href="#about">
          {typography("обо мне")}
        </a>
        <a className={styles.hero__menuLink} href="#contact">
          {typography("контакты")}
        </a>
      </nav>

      <img
        className={styles.hero__portrait}
        src={`${import.meta.env.BASE_URL}media/images/photo.png`}
        alt="Портрет Дарьи Такуш"
      />

      <img
        className={styles.hero__greeting}
        src={`${import.meta.env.BASE_URL}media/images/privet.png`}
        alt="Привет!"
      />

      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          <span>{typography("дарья")}</span>
          <span>{typography("такуш")}</span>
        </h1>

        <p className={styles.hero__description}>
          {typography("создаю рекламные кампании и автоматизирую дизайн с ai")}
        </p>
      </div>
    </section>
  );
}

export default Hero;
