import { useEffect } from "react";
import "../styles/Result.css";
import CriPlayer from "./CriPlayer";
import pokeball_open from "../assets/pokeball.wav";

const Result = ({ cri, imgSrc, setDialogLine }) => {
  const playSound = () => {
    const audio = document.getElementById("audio");
    audio.volume = 0.2;
    audio.play();
  };

  const playSoundPokeball = () => {
    const audio = document.getElementById("pokeball");

    audio.play();
  };
  const playBothSounds = () => {
    const audio = document.getElementById("audio");
    const audioPokeball = document.getElementById("pokeball");
    audio.volume = 0.2;
    audio.play() && audioPokeball.play();
  };

  useEffect(() => {
    const timer = setTimeout(playBothSounds, 1800);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <audio id="audio" src={cri}>
        <track kind="captions" />
      </audio>
      <audio id="pokeball" src={pokeball_open}>
        <track kind="captions" />
      </audio>
      <img
        className="result"
        onClick={playSound}
        onKeyPress={playSound}
        src={imgSrc}
        alt=""
      />
      <CriPlayer />
    </div>
  );
};

export default Result;
