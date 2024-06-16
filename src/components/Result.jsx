import "../styles/Result.css";
import CriPlayer from "./CriPlayer";

const Result = ({ imgSrc }) => {
	return (
		<div>
			<img className="result" src={imgSrc} alt="" />
			<CriPlayer />
		</div>
	);
};

export default Result;
