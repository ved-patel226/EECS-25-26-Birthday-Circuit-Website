import styles from "../css/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.materials}>
        <h1>Materials:</h1>
        <ul>
          <a href="#arduino" title="Arduino Nano (jump to section)">
            Arduino NANO
          </a>
          <a href="#m74-ssd" title="M74 SSD (jump to section)">
            M74 SSD (7-seg display)
          </a>
          <a href="#74ls93" title="74LS93N IC (jump to section)">
            74LS93N IC
          </a>

          <a href="#timer-555" title="Timer 555 (jump to section)">
            Timer 555
          </a>
          <a href="#potentiometer" title="Potentiometer (jump to section)">
            Potentiometer
          </a>
        </ul>
      </div>
    </div>
  );
}
