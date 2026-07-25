import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        портфолио
      </a>

      <nav className={styles.nav}>
        <a href="#works">работы</a>
        <a href="#about">обо мне</a>
        <a href="#experience">опыт</a>
        <a href="#education">образование</a>
      </nav>

    </header>
  );
}

export default Header;