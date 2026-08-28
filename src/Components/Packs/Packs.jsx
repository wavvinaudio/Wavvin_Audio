import { useState } from "react";
import "./Packs.css";

const packs = [
  {
    id: "loops",
    number: "01",
    title: "LOOPS",
    description: "MELODIC LOOPS • TEXTURES • SAMPLE MATERIAL",
  },
  {
    id: "drum-kits",
    number: "02",
    title: "DRUM KITS",
    description: "DRUMS • PERCUSSION • RHYTHMIC ELEMENTS",
  },
  {
    id: "808s",
    number: "03",
    title: "808s",
    description: "BASS • LOW END • HEAVY FREQUENCIES",
  },
  {
    id: "plugins",
    number: "04",
    title: "PLUGINS",
    description: "WAVVIN AUDIO TOOLS • COMING SOON",
  },
  {
    id: "freebies",
    number: "05",
    title: "FREEBIES",
    description: "FREE WAVVIN SOUNDS • DOWNLOADS",
  },
];

function Packs() {
  const [activePack, setActivePack] = useState(packs[0]);

  return (
    <section className="packs-section" id="packs">
      <div className="packs-container">

        <div className="packs-heading">
          <p className="section-label">WAVVIN AUDIO / LIBRARY</p>

          <h2>PACKS</h2>

          <p className="packs-intro">
            BUILD YOUR SOUND WITH WAVVIN AUDIO.
          </p>
        </div>

        <div className="packs-window">

          <div className="window-bar">
            <span className="window-title">WAVVIN_PACKS.EXE</span>

            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="packs-content">

            <div className="packs-menu">
              {packs.map((pack) => (
                <button
                  key={pack.id}
                  className={`pack-item ${
                    activePack.id === pack.id ? "active" : ""
                  }`}
                  onClick={() => setActivePack(pack)}
                >
                  <span className="pack-number">
                    {pack.number}
                  </span>

                  <span className="pack-title">
                    {pack.title}
                  </span>

                  <span className="pack-arrow">
                    ↗️
                  </span>
                </button>
              ))}
            </div>

            <div className="pack-preview">

              <span className="preview-number">
                {activePack.number}
              </span>

              <h3>{activePack.title}</h3>

              <p>{activePack.description}</p>

              <button className="explore-pack-button">
                EXPLORE {activePack.title}
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Packs;
