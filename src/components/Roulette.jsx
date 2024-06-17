import { useState } from "react";
import abdou from "../assets/abdou.png";
import prof from "../assets/prof_birch.png";
import "../styles/Roulette.css";
import Result from "./Result";
import CriPlayer from "./CriPlayer";
import pokeball_open from "../assets/pokeball.wav";
import pokeball from "../assets/pixel-art-pokeball.png";

const Roulette = ({ playAudio, cri, imgSrc, setImgSrc, playAnimation }) => {
  const handleClick = () => {
    const newImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      Math.floor(Math.random() * 1025) + 1
    }.png`;
    console.log(setImgSrc);
    setImgSrc(newImgSrc);
  };
  console.log(playAnimation);

  return (
    <div className="roulette">
      <CriPlayer cri={cri} playAudio={playAudio} />

      {playAnimation === 0 ? <img className="prof" src={prof} alt="" /> : null}
      {playAnimation === 1 ? (
        <div className="animation">
          <Result className="pokemon" imgSrc={imgSrc} />
          <img className="prof" src={prof} alt="" />
          <img className="pokeball" src={pokeball} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default Roulette;
