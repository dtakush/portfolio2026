import { typography } from "@/utils/typography";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__line} aria-hidden="true" />
      <p className={styles.footer__copyright}>
        {typography("2026 Daria Takush")}
      </p>
    </footer>
  );
}

export default Footer;
