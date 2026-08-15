import { typography } from "@/utils/typography";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        {typography("портфолио")}
      </a>

      <nav className={styles.nav}>
        <a href="#works">{typography("работы")}</a>
        <a href="#about">{typography("обо мне")}</a>
        <a href="#experience">{typography("опыт")}</a>
        <a href="#education">{typography("образование")}</a>
      </nav>

    </header>
  );
}

export default Header;
