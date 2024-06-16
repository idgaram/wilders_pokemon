import { useEffect } from "react";
import "../styles/CriPlayer.css";

const CriPlayer = ({ playAudio, cri }) => {
	useEffect(() => {
		const audio = document.getElementById("audio");
		if (playAudio === true) {
			audio.play();
		}
	});

	return (
		<div className="CriPlayer">
			<audio id="audio" src={cri}>
				<track kind="captions" />
			</audio>
		</div>
	);
};

export default CriPlayer;
