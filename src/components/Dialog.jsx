import { useState } from "react";
import "../styles/Dialog.css";
import { TypeAnimation } from "react-type-animation";
import logo_pixel from "../assets/logo_pixel.png";

const Dialog = ({
  pokemonName,
  setUsername,
  username,
  setPlayAudio,
  setPlayAnimation,
  setDialogLine,
  dialogLine,
}) => {
  const handleClick = (e) => {
    setPlayAudio(true);
    // setPlayAudio(false);
  };

  const dialogs = [
    { id: 0, text: "Bonjour à toutes et tous.\nJe suis le professeur Abdou" },
    {
      id: 1,
      text: "Puisque vous êtes ici nous allons déterminer\nquel pokemon vous convient.",
    },
    {
      id: 2,
      text: "À l'aide de mon algorithme avancé\ndéveloppé par le fan club de Julie Gayet",
    },
    {
      id: 3,
      text: "Il vous suffira pour celà de rentrer le nom\net le prénom de la personne concernée",
    },
    {
      id: 4,
      text: "vide",
    },
    {
      id: 5,
      text: `le pokemon te correspondant est ${pokemonName} qu'est ce que tu en dis ${username}? `,
    },
    {
      id: 6,
      text: "deuxieme",
    },
  ];

  const nextDialog = () => {
    setDialogLine((prevDialogLine) => prevDialogLine + 1);
  };

  const handleUsername = () => {
    const usernameInputField = document.querySelector("#usernameInput");
    setUsername(usernameInputField.value);
  };

  const animationState = () => {
    handleUsername();
    setPlayAnimation(1);

    nextDialog();
  };
  console.log(username);

  const TextCycle = {};

  return (
    <>
      {dialogLine < 4 ? (
        <div onClick={nextDialog} onKeyDown={nextDialog}>
          <p className="dialog" style={{ whiteSpace: "pre-wrap" }}>
            {dialogs[dialogLine].text}
            <span>
              <img src={logo_pixel} alt="" />
            </span>
          </p>
        </div>
      ) : null}

      {dialogLine === 4 ? (
        <div className="name">
          <input id="usernameInput" type="text" />
          <button
            type="button"
            onClick={nextDialog && animationState}
            onKeyDown={nextDialog && animationState}
          >
            analyser !
          </button>
          <img src={logo_pixel} alt="" />
        </div>
      ) : null}
      {dialogLine > 4 ? (
        <div onClick={nextDialog} onKeyDown={nextDialog}>
          <p className="dialog-last" style={{ whiteSpace: "pre-wrap" }}>
            {dialogs[dialogLine].text}
            <span>
              <img src={logo_pixel} alt="" />
            </span>
          </p>
        </div>
      ) : null}
    </>
  );
};

/* <button type="button" onClick={handleClick}>
				play audio
			</button> */

/* <input placeholder="benoit" />
			<button type="button" onClick={handleClick}>
				let's find out !
			</button> */

export default Dialog;
