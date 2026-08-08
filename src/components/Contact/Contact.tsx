import styles from "./Contact.module.scss";

function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <h2 className={styles.contact__title} id="contact-title">
        <span>давайте</span>
        <span>создавать</span>
        <span>вместе</span>
      </h2>

      <div className={styles.contact__content}>
        <p className={styles.contact__lead}>
          давайте обсудим рекламные кампании, ai, дизайн-системы
          <br />
          или ваш следующий проект
        </p>

        <address className={styles.contact__links}>
          <a href="mailto:dashatakush.us@gmail.com">
            email: dashatakush.us@gmail.com
          </a>
          <a href="https://t.me/dariatakush" target="_blank" rel="noreferrer">
            telegram: @dariatakush
          </a>
          <a
            href="https://www.linkedin.com/in/dariatakush"
            target="_blank"
            rel="noreferrer"
          >
            linkedin: linkedin.com/in/dariatakush
          </a>
          <a
            href="https://setka.ru/users/019a3b64-c245-7981-bdda-eae6d2dda0c6"
            target="_blank"
            rel="noreferrer"
          >
            сетка: setka.ru/users/dariatakush
          </a>
        </address>
      </div>
    </section>
  );
}

export default Contact;
