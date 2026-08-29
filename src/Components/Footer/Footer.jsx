import "./Footer.css";

const socials = [
  {
    name: "SOUNDCLOUD",
    url: "https://on.soundcloud.com/vgyICpUiCRPZ8zOX8V",
  },
  {
    name: "AUDIOMACK",
    url: "https://audiomack.com/wavvinaudio",
  },
  {
    name: "YOUTUBE",
    url: "https://youtube.com/@wavvin-audio?si=_m3qDx8tFBWhCD0p",
  },
  {
    name: "INSTAGRAM",
    url: "https://www.instagram.com/wavvin.audio",
  },
];
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <p className="footer-label">WAVVIN AUDIO</p>

          <h2>
            SOUND
            <br />
            WITHOUT
            <br />
            LIMITS.
          </h2>
        </div>

        <div className="footer-socials">
          <p>CONNECT</p>

          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.name} ↗️
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} WAVVIN AUDIO</span>

        <span>BUILT FOR SOUND.</span>
      </div>
    </footer>
  );
}

export default Footer;

