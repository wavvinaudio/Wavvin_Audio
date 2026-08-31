import { useEffect, useRef, useState } from "react";
import "./Instrumentals.css";

const beats = [
  {
    id: 1,
    title: "WAV 001",
    genre: "DNB / JUNGLE",
    bpm: "174 BPM",
    producer: "WAVVIN AUDIO",
    price: "R250",
    audio: `${import.meta.env.BASE_URL}audio/wav-001.mp3`,
  },
  {
    id: 2,
    title: "WAV 002",
    genre: "TRAP / HIP-HOP",
    bpm: "140 BPM",
    producer: "WAVVIN AUDIO",
    price: "R250",
    audio: `${import.meta.env.BASE_URL}audio/wav-002.mp3`,
  },
  {
    id: 3,
    title: "WAV 003",
    genre: "DEEP HOUSE",
    bpm: "122 BPM",
    producer: "WAVVIN AUDIO",
    price: "R250",
    audio: `${import.meta.env.BASE_URL}audio/wav-003.mp3`,
  },
  {
    id: 4,
    title: "WAV 004",
    genre: "LO-FI",
    bpm: "86 BPM",
    producer: "WAVVIN AUDIO",
    price: "R250",
    audio: `${import.meta.env.BASE_URL}audio/wav-004.mp3`,
  },
];

const waveform = [
  18, 30, 22, 48, 35, 62, 42, 76, 55, 32,
  68, 82, 45, 28, 58, 70, 38, 88, 52, 35,
  64, 44, 72, 31, 55, 84, 40, 66, 29, 48,
  75, 43, 60, 82, 34, 56, 70, 45, 88, 38,
  62, 30, 76, 52, 42, 68, 35, 58, 80, 26,
];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

function Instrumentals() {
  const audioRef = useRef(null);
  const waveformRef = useRef(null);

  const [activeBeat, setActiveBeat] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handlePlay = async (beat) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (activeBeat?.id === beat.id) {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }

      return;
    }

    audio.pause();

    audio.src = beat.audio;
    audio.currentTime = 0;

    setActiveBeat(beat);
    setCurrentTime(0);
    setDuration(0);

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("WAVvin audio preview could not play:", error);
      setIsPlaying(false);
    }
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    const waveform = waveformRef.current;

    if (!audio || !waveform || !duration) {
      return;
    }

    const rect = waveform.getBoundingClientRect();

    const clickPosition =
      (event.clientX - rect.left) / rect.width;

    const newTime = clickPosition * duration;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };
const progress =
    duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      className="instrumentals-section"
      id="instrumentals"
    >
      <audio ref={audioRef} preload="metadata" />

      <div className="instrumentals-container">

        <div className="instrumentals-heading">
          <p className="section-label">
            WAVVIN AUDIO / INSTRUMENTALS
          </p>

          <h2>INSTRUMENTALS</h2>

          <p className="instrumentals-intro">
            ORIGINAL WAVVIN AUDIO PRODUCTIONS.
          </p>
        </div>

        <div className="instrumentals-window">

          <div className="instrumentals-window-bar">
            <span>WAVVIN_INSTRUMENTALS.EXE</span>

            <div className="instrumentals-window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="instrumentals-list">

            {beats.map((beat) => {
              const isActive = activeBeat?.id === beat.id;

              return (
                <article
                  className={`instrumental-card ${
                    isActive ? "active" : ""
                  }`}
                  key={beat.id}
                >

                  <div className="instrumental-number">
                    0{beat.id}
                  </div>

                  <div className="instrumental-main">

                    <div className="instrumental-title-row">

                      <button
                        className="instrumental-play"
                        onClick={() => handlePlay(beat)}
                        aria-label={
                          isActive && isPlaying
                            ? `Pause ${beat.title}`
                            : `Play ${beat.title}`
                        }
                      >
                        {isActive && isPlaying ? "Ⅱ" : "▶️"}
                      </button>

                      <div>
                        <h3>{beat.title}</h3>

                        <p>{beat.genre}</p>
                      </div>

                    </div>

                    <div
                      className={`instrumental-waveform ${
                        isActive ? "waveform-active" : ""
                      }`}
                      ref={isActive ? waveformRef : null}
                      onClick={
                        isActive
                          ? handleSeek
                          : () => handlePlay(beat)
                      }
                      role="slider"
                      aria-label={`${beat.title} audio progress`}
                      aria-valuemin="0"
                      aria-valuemax={duration || 0}
                      aria-valuenow={
                        isActive ? currentTime : 0
                      }
                      tabIndex={0}
                    >
                      {waveform.map((height, index) => {
                        const barProgress =
                          (index / waveform.length) * 100;

                        return (
                          <span
                            key={index}
                            className={
                              isActive &&
                              barProgress <= progress
                                ? "played"
                                : ""
                            }
                            style={{
                              height: `${height}%`,
                            }}
                          />
                        );
                      })}
                    </div>

                    <div className="instrumental-time">
                      <span>
                        {isActive
                          ? formatTime(currentTime)
                          : "00:00"}
                      </span>
<span>
                        {isActive
                          ? formatTime(duration)
                          : "--:--"}
                      </span>
                    </div>

                    <div className="instrumental-meta">
                      <span>{beat.bpm}</span>
                      <span>{beat.producer}</span>
                    </div>

                  </div>

                  <div className="instrumental-buy">

                    <strong>{beat.price}</strong>

                    <button className="instrumental-get">
                      GET
                    </button>

                  </div>

                </article>
              );
            })}

          </div>

          <div className="instrumentals-footer">

            <span>
              {beats.length.toString().padStart(2, "0")}
              {" "}INSTRUMENTALS
            </span>

            <span>
              PREVIEW / SELECT / GET
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Instrumentals;
