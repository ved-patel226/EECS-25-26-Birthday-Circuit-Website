import styles from "../css/booleanalgebra.module.css";

export default function BooleanAlgebra() {
  return (
    <div className={styles.boolean_algebra}>
      <div className={styles.intro}>
        <h1>Boolean Algebra & Simplification</h1>
      </div>

      <div className={styles.main}>
        {/* Part 1: Truth Tables */}
        <div className={styles.section}>
          <div className={styles.section_header}>
            <h2>1. Truth Tables</h2>
          </div>

          <div className={styles.content}>
            <div className={styles.goal}>
              <h3>🎯 Goal</h3>
              <p>
                Represent all possible input combinations and their
                corresponding outputs for all SSD segments
              </p>
            </div>

            <div className={styles.description}>
              <p>
                To represent my birthday circuit using truth tables, I assign
                the 3-bit input as the variables. Then, for each segment on each
                SSD, I specify whether the segment should be on (1), off (0), or
                don't care (X) in cases where the input is out of bounds.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.section_header}>
            <h2>2. Karnaugh Maps (K-maps)</h2>
          </div>

          <div className={styles.content}>
            <div className={styles.goal}>
              <h3>🎯 Goal</h3>
              <p>
                Transform the truth table into a K-map, then get the boolean
                expressions in Sum of Products (SOP) form.
              </p>
            </div>

            <div className={styles.description}>
              <p>
                For every truth table, I make rectangular groups of 1's or X's,
                each group should contain 1, 2, 4, 8, etc. When doing this, you
                want the rectangles to be as large as possible to simplify as
                much as possible.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.section_header}>
            <h2>3. Boolean Expression Simplification</h2>
          </div>

          <div className={styles.content}>
            <div className={styles.goal}>
              <h3>🎯 Goal</h3>
              <p>
                Convert K-map groups into minimized boolean algebra expressions
              </p>
            </div>

            <div className={styles.description}>
              <p>
                For each group in my K-map, I found which input variables
                remained constant (always 0 or 1). Combine these input variables
                from all the groups with OR operations to generate the final SOP
                expression.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn">
        <a
          href="https://docs.google.com/document/d/1AqWNlVyfwUHu8vEfH_sojNXIcw4hZzXejEFymxk0Wa0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          📚 View Boolean Algebra & Simplification
        </a>
      </div>
    </div>
  );
}
