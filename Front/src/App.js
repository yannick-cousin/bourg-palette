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
	const [orientation, setOrientation] = useState(2); //0=>droite, 1=>gauche, 2=>face, 3=>dos
	const [data, setData] = useState([]); //Stokage des données de la map
	const [choiceMap, setChoiceMap] = useState([]); //Stokage table intial
	const [isMap, setIsMap] = useState(1); //choix de la map
	const [isInit, setIsInit] = useState(false);

	const init = () => {
		setPositionX(choiceMap[0].start_positionx);
		setPositionY(choiceMap[0].start_positiony);
	};

	const test = (event) => {
		let analyst = [];

		if (messageLoad) {
			switch (event.key) {
				case 'Enter':
					setMessageLoad(false);
					setMessage(null);
					break;
				default:
					return;
			}
		} else {
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
					if (analyst[0].destination !== null) {
						for (let i = 0; i < choiceMap.length; i++) {
							if (analyst[0].destination === choiceMap[i].id) {
								setPositionX(choiceMap[i].start_positionx);
								setPositionY(choiceMap[i].start_positiony);
								setIsMap(choiceMap[i].id_map);
							}
						}
					}
					return;
				case 'ArrowUp':
					// Faire quelque chose pour la touche "fléche vers le haut" pressée.
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
					if (analyst[0].destination !== null) {
						for (let i = 0; i < choiceMap.length; i++) {
							if (analyst[0].destination === choiceMap[i].id) {
								setPositionX(choiceMap[i].start_positionx);
								setPositionY(choiceMap[i].start_positiony);
								setIsMap(choiceMap[i].id_map);
							}
						}
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
		}
	};

	useEffect(() => {
		if (choiceMap.length > 1 && isInit === false) {
			init();
			setIsInit(true);
		}
		axios
			.put(`${process.env.REACT_APP_BACK}/map`, { id: isMap })
			.then((response) => response.data)
			.then((data) => setData(data));
	}, [choiceMap, isMap]);
	/*
	useEffect(() => {}, [data]);
*/
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACK}/initial`)
			.then((response) => response.data)
			.then((data) => setChoiceMap(data));
	}, []);

	return (
		<div className="App">
			<div className="titre">Balade à Bourg-Palette</div>
			<div className="tonecran">Veuillez passer sur un écran plus grand</div>
			<div className="coteacote">
				<div className="ensemble">
					<div className="top">
						<div className="ontop"></div>
					</div>
					<div className="center">
						<div className="onleft">
							<div className="onleftop"></div>
						</div>
						<div className="grille">
							<Grid
								positionX={positionX}
								positionY={positionY}
								data={data}
								message={message}
								messageLoad={messageLoad}
								orientation={orientation}
							/>
						</div>
						<div className="onright">
							<div className="onrightop"></div>
						</div>
					</div>
					<div className="foot">
						<div className="onfoot">
							<input
								type="textfield"
								autoFocus="true"
								onKeyDown={(e) => test(e)}
							/>
						</div>
					</div>
				</div>
				<div className="explications">
					<div className="touchehaut">
						<i className="fa-solid fa-angle-up"></i>
					</div>
					<div className="touchegauche">
						<i className="fa-solid fa-angle-left"></i>
					</div>
					<div className="manette"></div>
					<div className="touchedroite">
						<i className="fa-solid fa-angle-right"></i>
					</div>
					<div className="touchebas">
						<i className="fa-solid fa-angle-down"></i>
					</div>
					<div className="fleches">
						Utiliser les touches directionnels de votre clavier pour diriger
						votre personnage.
					</div>
					<div className="enter">
						<i className="fa-solid fa-arrow-right-to-bracket"></i>
					</div>
					<div className="enterplease">
						Utiliser la touche entrée pour intéragir avec certains éléments du
						décor.
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
