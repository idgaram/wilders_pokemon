import { useState } from "react";
import abdou from "../assets/abdou.png";
import prof from "../assets/prof_birch.png";
import "../styles/Roulette.css";
import Result from "./Result";
import CriPlayer from "./CriPlayer";

const Roulette = ({ playAudio, cri, imgSrc, setImgSrc }) => {
	const handleClick = () => {
		const newImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			Math.floor(Math.random() * 1025) + 1
		}.png`;
		console.log(setImgSrc);
		setImgSrc(newImgSrc);
	};

	return (
		<div className="roulette">
			<CriPlayer cri={cri} playAudio={playAudio} />
			<Result imgSrc={imgSrc} />
			<img className="prof" src={prof} alt="" />
		</div>
	);
};

export default Roulette;
