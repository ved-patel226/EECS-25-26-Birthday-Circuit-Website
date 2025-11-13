import styles from "../css/hero.module.css";

export default function Hero() {
  const videos = [
    {
      src: "vids/stage_2.mp4",
      title: "Arduino + SSD",
      bullets: [
        "Used Arduino as PLD",
        "Switches as input",
        "Used boolean expressions from truth tables and K-map",
      ],
    },
    {
      src: "vids/counter.mp4",
      title: "Ardiuno + SSD + 74LS93N",
      bullets: [
        "7-segment display output",
        "Binary counting mechanism",
        "Reset and control logic",
      ],
    },

    {
      src: "vids/final.mp4",
      title: "Ardiuno + SSD + 74LS93N + Timer 555",
      bullets: [
        "Integrated counter and display system",
        "Automated birthday sequence",
        "LED indicators for status",
      ],
    },
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.materials}>
        <h1>Birthday Circuit</h1>
        <p>(Hover over the circuits to see the videos)</p>
        <div className={styles.videos}>
          {videos.map((video, index) => (
            <div key={index} className={styles.card}>
              {index % 2 === 1 && (
                <div className={styles.text}>
                  <h2>{video.title}</h2>

                  {video.bullets && video.bullets.length > 0 && (
                    <ul className={styles.bullets}>
                      {video.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              <video
                src={video.src}
                loop
                muted
                playsInline
                preload="metadata"
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                Your browser does not support the video tag.
              </video>
              {index % 2 === 0 && (
                <div className={styles.text}>
                  <h2>{video.title}</h2>
                  {video.bullets && video.bullets.length > 0 && (
                    <ul className={styles.bullets}>
                      {video.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
