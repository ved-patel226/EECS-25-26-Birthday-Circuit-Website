import styles from "../css/videos.module.css";

export default function Videos() {
  const videos = [
    {
      src: "vids/stage_2.mp4",
      title: "Ardiuno + SSD",
      bullets: [
        "Used Arduino as PLD",
        "Switches as input",
        "Used boolean expressions from truth tables and K-map",
        "Ardiuno reads switch input and outputs segment expressions",
      ],
      conclusion:
        "This stage established the foundational logic system for the project. All other stages were built on this one.",
    },
    {
      src: "vids/counter.mp4",
      title: "Ardiuno + SSD + 74LS93N",
      bullets: [
        "Used 74LS93N as binary counter",
        "Clock and reset input",
        "Ardiuno reads 74LS93N output",
      ],
      conclusion:
        "Adding the counter chip enabled counting using pulse and reset inputs. Using this instead of binary input is much more user friendly.",
    },

    {
      src: "vids/final.mp4",
      title: "Ardiuno + SSD + 74LS93N + Timer 555",
      bullets: [
        "Timer 555 generates pulse for the 74LS93N IC",
        "Potentiometer as input; allows change of cycle speed",
        "74LS93N reads Timer 555 output pulse",
      ],
      conclusion:
        "Automating pulse as well, which fully automated this circuit. By introducing the 555 timer, the circuit could generate clock pulses automatically, removing the need for manual input.",
    },
  ];

  return (
    <>
      <div className={styles.ttl_text}>
        <h1>The Circuit</h1>
        <h2>(hover to see videos)</h2>
      </div>

      <div className={styles.videos}>
        {videos.map((video, index) => (
          <div key={index} className={styles.card}>
            {index % 2 === 1 && (
              <div className={styles.text}>
                <div className={styles.text_main}>
                  <h2>{video.title}</h2>
                  {video.bullets && video.bullets.length > 0 && (
                    <ul className={styles.bullets}>
                      {video.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <p className={styles.conclusion}>{video.conclusion}</p>
              </div>
            )}
            <div className={styles.videoWrapper}>
              <video
                src={video.src}
                loop
                muted
                playsInline
                preload="auto" // load on website start
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {index % 2 === 0 && (
              <div className={styles.text}>
                <div className={styles.text_main}>
                  <h2>{video.title}</h2>
                  {video.bullets && video.bullets.length > 0 && (
                    <ul className={styles.bullets}>
                      {video.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <p className={styles.conclusion}>{video.conclusion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
