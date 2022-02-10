import { useState, useEffect } from 'react';
import black from './assets/black.png';
import './styles/GridDetail.css';

const GridDetail = (props) => {
	const [image, setImage] = useState('');
	const [selectData, setSelectData] = useState([]);
	const [isLoad, setIsLoad] = useState(false);

	useEffect(() => {
		for (let i = 0; i < props.data.length; i++) {
			if (
				props.data[i].positionx === props.positionX &&
				props.data[i].positiony === props.positionY
			) {
				setImage(`http://localhost:3030/public/${props.data[i].image}`);
				setIsLoad(true);
			} else {
				setIsLoad(false);
			}
		}
	}, [props.data, props.positionX, props.positionY]);

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
