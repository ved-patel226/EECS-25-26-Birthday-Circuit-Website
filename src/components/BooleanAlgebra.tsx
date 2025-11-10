import styles from "../css/booleanalgebra.module.css";

export default function BooleanAlgebra() {
  return (
    <div className={styles.boolean_algebra}>
      <div>
        <h1>Boolean Algebra + KMAP</h1>
      </div>

      <p>
        To display my birthday and dashes, we need to control each SSD segment
        instead of using a decoder IC. We can use truth tables and Karnaugh maps
        to find the Boolean expressions required for my birthday. First, we
        start with the first SSD and the first segment. Using three bits, we
        count up—for example, 000 is first—and map this to the first digit we
        need to display. In this case, it would be the number 2. To display 2,
        segment A should be off, and we repeat this process for all segments.
        Then, we use K-maps to derive the Boolean expressions.
      </p>
      <a
        href="https://docs.google.com/document/d/1AqWNlVyfwUHu8vEfH_sojNXIcw4hZzXejEFymxk0Wa0/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Truth Table + KMAP LINK
      </a>
    </div>
  );
}
