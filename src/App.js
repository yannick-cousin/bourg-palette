import './App.css';
import Grid from './components/Grid';
import { useState, useEffect } from 'react';

function App() {
	const [positionX, setPositionX] = useState(0);
	const [positionY, setPositionY] = useState(0);
	let temp;

	const updateX = (x) => {
		console.log('coucou - x : ', x);
		setPositionX(x);
	};

	const updateY = (y) => {
		console.log('coucou - y :', y);
		setPositionY(y);
	};

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
						console.log('touche droit');
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

	return (
		<div className="App">
			<Grid x={positionX} y={positionY} />
		</div>
	);
}

export default App;
