import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-red"></div>
      <div className="hero-glow glow-purple"></div>
      <div className="hero-glow glow-blue"></div>

      <div className="hero-content">

        <h1 className="hero-title">WAVVIN Audio</h1>
        
        <h2 className="hero-tagline">We Are The Wav In Audio</h2>
        <p className="hero-tagline">
          Discover Hip Hop, Trap, Drum and Bass, Jungle, Deep House,
    Lo-Fi, Amapiano and experimental music.
        </p>

        <div className="hero-actions">
          <button className="primary-button">
            EXPLORE PACKS
          </button>

          <button className="secondary-button">
            LISTEN
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
