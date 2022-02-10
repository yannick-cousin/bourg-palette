import './App.css';
import Grid from './components/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [positionX, setPositionX] = useState(0);
	const [positionY, setPositionY] = useState(0);
	const [selectPositionX, setSelectPositionX] = useState(0);
	const [selectPositionY, setSelectPositionY] = useState(0);
	const [data, setData] = useState([]);

	const updateAllPosition = () => {
		setPositionX(selectPositionX);
		setPositionY(selectPositionY);
	};

	const changePositionX = (e) => {
		setSelectPositionX(e.target.value);
	};

	const changePositionY = (e) => {
		setSelectPositionY(e.target.value);
	};

	useEffect(() => {
		axios
			.get('http://localhost:3030/bourg')
			.then((response) => response.data)
			.then((data) => setData(data));
	}, []);
	/*
	useEffect(() => {
		console.log('position X :', positionX);
		console.log('position Y :', positionY);
		window.addEventListener(
			'keydown',
			(event) => {
				if (event.defaultPrevented) {
					return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
				}
				switch (event.key) {
					case 'ArrowDown':
						// Faire quelque chose pour la touche "flèche vers le bas" pressée.
						console.log('touche bas');
						console.log('position Y dans useEffect :', positionY);
						updateY(positionY + 1);
						break;
					case 'ArrowUp':
						// Faire quelque chose pour la touche "up arrow" pressée.
						console.log('touche haut');
						console.log('position Y dans useEffect :', positionY);
						updateY(positionY - 1);
						break;
					case 'ArrowLeft':
						// Faire quelque chose pour la touche "left arrow" pressée.
						console.log('touche gauche');
						updateX(positionX - 1);
						break;
					case 'ArrowRight':
						// Faire quelque chose pour la touche "right arrow" pressée.
						console.log('touche droite');
						updateX(positionX + 1);
						break;
					case 'Enter':
						// Faire quelque chose pour les touches "enter" ou "return" pressées.
						console.log('Touche Enter - Return');
						break;
					case 'Escape':
						// Faire quelque chose pour la touche "esc" pressée.
						console.log('Touche Escape');
						break;
					default:
						return; // Quitter lorsque cela ne gère pas l'événement touche.
				}
				// Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
				event.preventDefault();
			},
			true
		);
		console.log(`Position X : ${positionX} - Position Y : ${positionY}`);
	}, [positionX, positionY]);
*/
	return (
		<div className="App">
			<div className="grille">
				<Grid positionX={positionX} positionY={positionY} data={data} />
			</div>
			<div className="choice">
				Position X :{' '}
				<input
					type="text"
					className="inputText buttonConnect"
					id="gridCo2"
					name="password"
					placeholder="Position X"
					onChange={(e) => changePositionX(e)}
				></input>{' '}
				<br />
				Position Y :{' '}
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
			</div>
		</div>
	);
}

export default App;
