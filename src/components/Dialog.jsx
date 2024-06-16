import "../styles/Dialog.css";

const Dialog = ({ setPlayAudio }) => {
	const handleClick = (e) => {
		setPlayAudio(true);
		// setPlayAudio(false);
	};

	return (
		<>
			<button type="button" onClick={handleClick}>
				play audio
			</button>
		</>
	);
};

/* <input placeholder="benoit" />
			<button type="button" onClick={handleClick}>
				let's find out !
			</button> */

export default Dialog;
