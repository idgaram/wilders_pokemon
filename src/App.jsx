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
	const [pokemon, setPokemon] = useState(0);
	const [count, setCount] = useState(0);
	const [day, setDay] = useState(new Date().toLocaleDateString());
	const [imgSrc, setImgSrc] = useState(null);
	const [cri, setCri] = useState(null);
	const [playAudio, setPlayAudio] = useState(false);
	// const [imgSrc, setImgSrc] = useState(
	// 	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Pokemon}.png`,
	// );
	// const [cri, setCri] = useState(
	// 	`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${Pokemon}.ogg`,
	// );

	const today = new Date().toLocaleDateString();

	// useEffect(() => {
	// 	const generateRandomPokemon = () => {
	// 		return Math.floor(Math.random() * 1025) + 1;
	// 	};
	// 	setPokemon(generateRandomPokemon());
	// }, []);

	useEffect(() => {
		const fetchPokemon = async () => {
			const pokemon = Math.floor(Math.random() * 1025) + 1;
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemon}`,
				);
				const data = await response.json();

				setImgSrc(data.sprites.front_default);
				setCri(data.cries.latest);
			} catch (error) {
				console.error("Error fetching data from json", error);
			}
		};
		fetchPokemon();
	}, []);

	console.log(playAudio);

	return (
		<>
			<Header day={day} />

			<Roulette
				playAudio={playAudio}
				cri={cri}
				imgSrc={imgSrc}
				setImgSrc={setImgSrc}
			/>
			<Dialog setPlayAudio={setPlayAudio} />
			{/* <Result imgSrc={imgSrc} />
			<Historique /> */}
		</>
	);
}

export default App;
