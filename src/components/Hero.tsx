import styles from "../css/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Birthday Circuit</h1>
      <p>The EECS final exploratory project. Created by Ved Patel.</p>

      <div className="btn">
        <a
          href="https://docs.google.com/document/d/1JL9dlh84g1gIEW48HJqDEjuBlnhaI8h-riEJypo-m2g/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⏰ View Version History
        </a>
      </div>
    </div>
  );
}
