import "./Identity.css";

const platforms = [
  {
    name: "SoundCloud",
    icon: "♫",
    url: "https://on.soundcloud.com/vgyICpUiCRPZ8zOX8V",
  },
  {
    name: "Audiomack",
    icon: "◉",
    url: "https://audiomack.com/wavvinaudio",
  },
  {
    name: "YouTube",
    icon: "▶️",
    url: "https://youtube.com/@wavvin-audio?si=_m3qDx8tFBWhCD0p",
  },
  {
    name: "Instagram",
    icon: "◎",
    url: "https://www.instagram.com/wavvin.audio",
  },
];

function Identity() {
  return (
    <section className="identity" id="identity">
      <div className="identity-inner">
        
        <p className="identity-label">WAVVIN AUDIO</p>

        <div className="identity-mark">
          <div className="identity-avatar">
            <span>W</span>
          </div>
        </div>

        <p className="identity-text identity-genres">
          HIP-HOP/RAP • JUNGLE • EXPERIMENTAL
        </p>

        <h2 className="identity-title">
          WE ARE THE WAV IN AUDIO.
        </h2>

        <p className="identity-text identity-description">
          WAVvin Audio is an independent South African audio platform exploring
          DnB (Drum and Bass), Jungle, experimental music, Hip Hop, Trap, Deep
          House, Lo-Fi and Amapiano. WAVvin Audio features original music,
          instrumentals, beats and evolving audio experiences.
        </p>

        <div className="platform-links">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-link"
              aria-label={platform.name}
            >
              <span>{platform.icon}</span>
              <small>{platform.name}</small>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Identity;
