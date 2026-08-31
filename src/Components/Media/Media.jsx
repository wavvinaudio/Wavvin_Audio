import "./Media.css";

const platforms = [
  {
    name: "SOUNDCLOUD",
    type: "LISTEN",
    description: "STREAM THE WAVVIN AUDIO CATALOG.",
    icon: "☁️",
    url: "https://on.soundcloud.com/vgyICpUiCRPZ8zOX8V",
  },
  {
    name: "AUDIOMACK",
    type: "DISCOVER",
    description: "EXPLORE MORE WAVVIN AUDIO RELEASES.",
    icon: "◉",
    url: "https://audiomack.com/wavvinaudio",
  },
  {
    name: "YOUTUBE",
    type: "WATCH",
    description: "WATCH WAVVIN AUDIO VISUALS AND CONTENT.",
    icon: "▶️",
    url: "https://youtube.com/@wavvin-audio?si=_m3qDx8tFBWhCD0p",
  },
];

function Media() {
  return (
    <section className="media-section" id="media">
      <div className="media-container">

        <div className="media-heading">
          <p className="section-label">
            WAVVIN AUDIO / SIGNAL
          </p>

          <h2>LISTEN / WATCH</h2>

          <p>
            ENTER THE WAVVIN AUDIO UNIVERSE.
          </p>
        </div>

        <div className="media-grid">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="media-card"
            >
              <div className="media-top">
                <span className="media-number">
                  0{index + 1}
                </span>

                <span className="media-icon">
                  {platform.icon}
                </span>
              </div>

              <div className="media-info">
                <p className="media-type">
                  {platform.type}
                </p>

                <h3>{platform.name}</h3>

                <p className="media-description">
                  {platform.description}
                </p>
              </div>

              <div className="media-enter">
                <span>ENTER</span>
                <span>↗️</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Media;

