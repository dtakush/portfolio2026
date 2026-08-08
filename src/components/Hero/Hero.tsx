import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <nav className={styles.hero__menu} aria-label="Основная навигация">
        <a className={styles.hero__menuLink} href="#works">
          работы
        </a>
        <a className={styles.hero__menuLink} href="#about">
          обо мне
        </a>
        <a className={styles.hero__menuLink} href="#contact">
          контакты
        </a>
      </nav>

      <img
        className={styles.hero__portrait}
        src="/media/images/photo.png"
        alt="Портрет Дарьи Такуш"
      />

      <img
        className={styles.hero__greeting}
        src="/media/images/privet.png"
        alt="Привет!"
      />

      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          <span>дарья</span>
          <span>такуш</span>
        </h1>

        <p className={styles.hero__description}>
          создаю рекламные<br />
          кампании и автоматизирую<br />
          дизайн с ai
        </p>
      </div>
    </section>
  );
}

export default Hero;
