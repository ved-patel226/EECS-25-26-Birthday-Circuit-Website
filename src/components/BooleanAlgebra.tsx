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
                Truth tables are fundamental tools in digital logic design. They
                list all possible input combinations and their outputs, allowing
                me to model my birthday circuit.
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
                {/* Transform truth tables into K-maps and identify optimal groupings
              to minimize boolean expressions in Sum of Products (SOP) form. */}
                Transform the truth table into a K-map, then get the boolean
                expressions in Sum of Products (SOP) form.
              </p>
            </div>

            <div className={styles.description}>
              <p>
                K-maps provide a visual method for simplifying boolean
                expressions. I created rectangular groups of 1s (and don’t cares
                “X), making sure I am creating the largest rectangles possible.
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
                Boolean Expression Simplification Convert K-map groups into
                minimized boolean algebra expressions
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
