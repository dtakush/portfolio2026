import { typography } from "@/utils/typography";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <h2 className={styles.contact__title} id="contact-title">
        <span className={styles.contact__titleDesktop}>
          <span>{typography("давайте")}</span>
          <span>{typography("создавать")}</span>
          <span>{typography("вместе")}</span>
        </span>
        <span className={styles.contact__titleMobile}>
          <span>{typography("давайте созда")}</span>
          <span>{typography("вать вместе")}</span>
        </span>
      </h2>

      <div className={styles.contact__content}>
        <p className={styles.contact__lead}>
          {typography("давайте обсудим рекламные кампании, ai, дизайн-системы")}
          <br />
          {typography("или ваш следующий проект")}
        </p>

        <address className={styles.contact__links}>
          <a href="mailto:dashatakush.us@gmail.com">
            {typography("email: dashatakush.us@gmail.com")}
          </a>
          <a href="https://t.me/dariatakush" target="_blank" rel="noreferrer">
            {typography("telegram: @dariatakush")}
          </a>
          <a
            href="https://www.linkedin.com/in/dariatakush"
            target="_blank"
            rel="noreferrer"
          >
            {typography("linkedin: linkedin.com/in/dariatakush")}
          </a>
          <a
            href="https://setka.ru/users/019a3b64-c245-7981-bdda-eae6d2dda0c6"
            target="_blank"
            rel="noreferrer"
          >
            {typography("сетка: setka.ru/users/dariatakush")}
          </a>
        </address>
      </div>
    </section>
  );
}

export default Contact;
