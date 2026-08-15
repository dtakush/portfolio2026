import { ticker } from "../../data/ticker";
import { typography } from "@/utils/typography";
import styles from "./Ticker.module.scss";

function Ticker() {
  return (
    <section className={styles.ticker} aria-label="Навыки">
      <div className={styles.ticker__track}>
        {[false, true].map((isDuplicate) => (
          <div
            key={String(isDuplicate)}
            className={styles.ticker__group}
            aria-hidden={isDuplicate}
          >
            {ticker.flatMap((item) =>
              item.description.map((word) => (
                <div className={styles.ticker__item} key={`${item.id}-${word}`}>
                  <span>{typography(word)}</span>
                  <span className={styles.ticker__divider} aria-hidden="true" />
                </div>
              )),
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ticker;
