import { useState, useEffect } from 'react';
import black from './assets/black.png';
import './styles/GridDetail.css';

const GridDetail = ({ positionX, positionY, data }) => {
	const [image, setImage] = useState('');
	const [selectData, setSelectData] = useState([]);
	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		setIsLoad(false);
		for (let i = 0; i < data.length; i++) {
			if (data[i].positionx === positionX && data[i].positiony === positionY) {
				console.log("It's true");
				setImage(`http://localhost:3030/public/${data[i].image}`);
				setIsLoad(true);
			}
		}
	}, [data, positionX, positionY]);

	useEffect(() => {
		if (image !== null) {
			setIsLoad(true);
		} else {
			setIsLoad(false);
		}
	}, [image]);

	return (
		<div className="card">
			<img src={isLoad ? image : black} />
		</div>
	);
};

export default GridDetail;
