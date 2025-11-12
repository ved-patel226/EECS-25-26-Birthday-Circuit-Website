import styles from "../css/booleanalgebra.module.css";

export default function BooleanAlgebra() {
  return (
    <div className={styles.boolean_algebra}>
      <div className={styles.section}>
        <div>
          <h1>Truth Table</h1>
        </div>

        <p>
          To simplify the truth tables into boolean expressions, we can use
          K-maps. For each value in the K-map, you try to make the biggest
          possible rectangular group of 2, 4, 8, or 16. This rectangle should
          only cover “X” and “1”. After you get all these groups, find which
          input groups remain constant, and add that to the boolean expression.
          This method will output in SOP form.
        </p>
      </div>

      <div className={styles.section}>
        <div>
          <h1>Boolean simplification</h1>
        </div>
        <p>
          To simplify the truth tables into boolean expressions, we can use
          K-maps. For each value in the K-map, you try to make the biggest
          possible rectangular group of 2, 4, 8, or 16. This rectangle should
          only cover “X” and “1”. After you get all these groups, find which
          input groups remain constant, and add that to the boolean expression.
          This method will output in SOP form.
        </p>
        <a
          href="https://docs.google.com/document/d/1AqWNlVyfwUHu8vEfH_sojNXIcw4hZzXejEFymxk0Wa0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Truth Table + KMAP LINK
        </a>
      </div>
    </div>
  );
}
