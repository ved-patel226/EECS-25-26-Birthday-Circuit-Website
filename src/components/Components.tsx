import styles from "../css/components.module.css";

export default function Components() {
  const components = [
    {
      id: 1,
      name: "Arduino Nano",
      description:
        "The Ardiuno acts as the PLD (Programmable Logic Device) to change 3 bit input -> outputs for segments. We can get these boolean algebra expressions by Karnaugh maps",
      pic: "imgs/ardiuno.jpg",
    },
    {
      id: 2,
      name: "SSD",
      description:
        "The seven-segment display is used to show my birthday. We use two of them.",
      pic: "imgs/SSD.jpg",
    },
    {
      id: 3,
      name: "74LS93N",
      description:
        "4-bit binary counter IC chip. This chip takes a clock input from the timer 555 and counts up with 4 bits.",
      pic: "imgs/74LS93N.png",
    },
    {
      id: 4,
      name: "Timer 555",
      description:
        "The 555 timer generates a clock pulse for the 74LS93N counter. The pulse determines how fast the display cycles through my birthday.",
      pic: "imgs/555.jpg",
    },
    {
      id: 5,
      name: "Potentiometer",
      description:
        "A variable resistor used to adjust the resistance in the 555 timer circuit. Changing the resistance controls how the speed of the output 555 pulse.",
      pic: "imgs/potentiometer.jpg",
    },
  ];

  return (
    <div className={styles.components}>
      <div>
        <h1>Components</h1>
        <h2>(Hover to see descriptions)</h2>
      </div>

      <ul className={styles.component_list}>
        {components.map((component) => (
          <li key={component.id} className={styles.component_item}>
            <img src={component.pic} alt={component.name} />
            <div className={styles.component_overlay}>
              <h3>{component.name}</h3>
              <p>{component.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
