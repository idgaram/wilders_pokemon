import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../src/styles/App.css";
import Title from "./components/Title";
import Roulette from "./components/Roulette";
import Historique from "./components/Historique";
import Result from "./components/Result";
import Header from "./components/Header";
import Dialog from "./components/Dialog";

function App() {
  const [pokemon, setPokemon] = useState(Math.floor(Math.random() * 1025) + 1);
  const [count, setCount] = useState(0);
  const [day, setDay] = useState(new Date().toLocaleDateString());
  const [imgSrc, setImgSrc] = useState(null);
  const [cri, setCri] = useState(null);
  const [playAudio, setPlayAudio] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(0);
  const [dialogLine, setDialogLine] = useState(0);

  const today = new Date().toLocaleDateString();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        const data = await response.json();

        setImgSrc(data.sprites.front_default);
        setCri(data.cries.latest);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data from json", error);
      }
    };
    fetchPokemon();
  }, [pokemon]);

  //   console.log(playAudio);

  return (
    <>
      <Header day={day} />

      <Roulette
        setDialogLine={setDialogLine}
        playAudio={playAudio}
        cri={cri}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
        playAnimation={playAnimation}
      />
      <Dialog
        setDialogLine={setDialogLine}
        dialogLine={dialogLine}
        setPlayAudio={setPlayAudio}
        setPlayAnimation={setPlayAnimation}
      />
    </>
  );
}

export default App;
