import styles from "../css/reflection.module.css";

export default function Reflection() {
  return (
    <div className={styles.reflection}>
      <div>
        <h1>Reflection</h1>
      </div>

      <p>
        I created a circuit to display my birthday across two SSDs. The circuit
        follows the sequence: 02 -- 26 -- 11. First, I made boolean algebra
        expressions using K-maps to find the correct boolean algebra
        expressions. Every step of the project slowly added more and more
        features, leading to the circuit becoming fully automated. I really
        liked adding the Timer 555 because I didn’t have to touch the circuit
        and I could watch it display my birthday. It was really cool seeing the
        automation work and display things without user input. Overall, I really
        enjoyed this project because it gave me a chance to explore Arduino,
        something I always wanted to explore, but hadn’t before.
        <br />
        <br />
        Thank you again for an amazing class! I hope to have the opportunity to
        be in your class again in marking period 3!
      </p>
    </div>
  );
}
