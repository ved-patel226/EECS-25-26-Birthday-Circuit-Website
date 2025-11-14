import styles from "../css/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className="migra">Birthday Circuit</p>
      </div>
      <div className={styles.meta}>
        <span>© {new Date().getFullYear()} Ved Patel</span>
        <span>Made with TypeScript + React</span>
      </div>
    </footer>
  );
}
