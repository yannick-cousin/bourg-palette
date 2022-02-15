import './App.css';
import Grid from './components/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [positionX, setPositionX] = useState(0); //position X du joueur
	const [positionY, setPositionY] = useState(0); //position Y du joueur
	const [selectPositionX, setSelectPositionX] = useState(0); //utiliser lors des tests
	const [selectPositionY, setSelectPositionY] = useState(0); //utiliser lors des tests
	const [message, setMessage] = useState(null); //stokage des messages
	const [messageLoad, setMessageLoad] = useState(false); // Affichage du message
	const [orientation, setOrientation] = useState(0); //0=>droite, 1=>gauche, 2=>bas, 3=>haut
	const [data, setData] = useState([]);

	const updateAllPosition = () => {
		setPositionX(selectPositionX);
		setPositionY(selectPositionY);
	};

	const changePositionX = (e) => {
		setSelectPositionX(parseInt(e.target.value));
	};

	const changePositionY = (e) => {
		setSelectPositionY(parseInt(e.target.value));
	};

	const test = (event) => {
		let analyst = [];
		switch (event.key) {
			case 'ArrowDown':
				// Faire quelque chose pour la touche "flèche vers le bas" pressée.
				//console.log('touche bas');
				setMessageLoad(false);
				setMessage(null);
				analyst = data.filter((pos) => pos.positionx === positionX);
				analyst = analyst.filter((pos) => pos.positiony === positionY + 1);
				setOrientation(2);
				if (analyst[0].blocked !== 1) {
					setPositionY(positionY + 1);
				}
				return;
			case 'ArrowUp':
				// Faire quelque chose pour la touche "up arrow" pressée.
				//console.log('touche haut');
				setMessageLoad(false);
				setMessage(null);
				analyst = data.filter((pos) => pos.positionx === positionX);
				analyst = analyst.filter((pos) => pos.positiony === positionY - 1);
				setOrientation(3);
				if (analyst[0].blocked !== 1) {
					setPositionY(positionY - 1);
				}
				if (analyst[0].message !== null) {
					setMessage(analyst[0].message);
				}
				return;
			case 'ArrowLeft':
				// Faire quelque chose pour la touche "left arrow" pressée.
				//console.log('touche gauche');
				setMessageLoad(false);
				setMessage(null);
				analyst = data.filter((pos) => pos.positionx === positionX - 1);
				analyst = analyst.filter((pos) => pos.positiony === positionY);
				setOrientation(1);
				if (analyst[0].blocked !== 1) {
					setPositionX(positionX - 1);
				}
				return;
			case 'ArrowRight':
				// Faire quelque chose pour la touche "right arrow" pressée.
				//console.log('touche droite');
				setMessageLoad(false);
				setMessage(null);
				analyst = data.filter((pos) => pos.positionx === positionX + 1);
				analyst = analyst.filter((pos) => pos.positiony === positionY);
				setOrientation(0);
				if (analyst[0].blocked !== 1) {
					setPositionX(positionX + 1);
				}
				return;
			case 'Enter':
				// Faire quelque chose pour les touches "enter" ou "return" pressées.
				//console.log('Touche Enter - Return');
				console.log(messageLoad);
				console.log(orientation);
				if (orientation === 3 && message !== null && messageLoad === false) {
					setMessageLoad(true);
				} else if (orientation === 3 && messageLoad) {
					setMessageLoad(false);
					setMessage(null);
				}
				break;
			case 'Escape':
				// Faire quelque chose pour la touche "esc" pressée.
				//console.log('Touche Escape');
				break;
			default:
				return; // Quitter lorsque cela ne gère pas l'événement touche.
		}
		// Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
		event.preventDefault();
	};

	useEffect(() => {
		axios
			.get('http://localhost:3030/bourg')
			.then((response) => response.data)
			.then((data) => setData(data));
	}, []);

	return (
		<div className="App">
			<div className="grille">
				<Grid
					positionX={positionX}
					positionY={positionY}
					data={data}
					message={message}
					messageLoad={messageLoad}
				/>
			</div>
			<div className="choice">
				Position X :
				<input
					type="text"
					className="inputText buttonConnect"
					id="gridCo2"
					name="password"
					placeholder="Position X"
					onChange={(e) => changePositionX(e)}
				></input>
				<br />
				Position Y :
				<input
					type="text"
					className="inputText buttonConnect"
					id="gridCo2"
					name="password"
					placeholder="Position Y"
					onChange={(e) => changePositionY(e)}
				></input>
				<br />
				<button
					type="button"
					className="buttonConnect"
					id="gridCo3"
					onClick={() => updateAllPosition()}
				>
					Changer la position
				</button>
				<br />
				<input type="textfield" onKeyDown={(e) => test(e)} />
			</div>
		</div>
	);
}

export default App;
