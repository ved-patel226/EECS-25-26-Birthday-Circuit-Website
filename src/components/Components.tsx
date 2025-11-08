import styles from "../css/components.module.css";

export default function Components() {
  const components = [
    {
      id: 1,
      name: "Arduino Nano",
      description: "Compact microcontroller board based on ATmega328P",
    },
    {
      id: 2,
      name: "SSD",
      description: "Solid State Drive for fast data storage",
    },
    {
      id: 3,
      name: "74LS93N",
      description: "4-bit binary counter IC chip",
    },
    {
      id: 4,
      name: "Timer 555",
      description: "Versatile precision timing IC for oscillators and timers",
    },
    {
      id: 5,
      name: "Potentiometer",
      description: "Variable resistor for adjusting voltage or resistance",
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
            <img
              src={`https://picsum.photos/seed/${component.id}/1000/400`}
              alt={component.name}
            />
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
