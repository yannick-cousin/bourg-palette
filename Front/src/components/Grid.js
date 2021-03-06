import GridDetail from './GridDetail';
import { useEffect, useState } from 'react';
import './styles/Grid.css';
import face from './assets/face.png';
import droite from './assets/droite.png';
import gauche from './assets/gauche.png';
import dos from './assets/dos.png';

const Grid = ({
	positionX,
	positionY,
	data,
	message,
	messageLoad,
	orientation,
}) => {
	const [perso, setPerso] = useState(face);

	useEffect(() => {
		if (orientation === 0) {
			setPerso(droite);
		} else if (orientation === 1) {
			setPerso(gauche);
		} else if (orientation === 2) {
			setPerso(face);
		} else if (orientation === 3) {
			setPerso(dos);
		}
	}, [orientation]);

	return (
		<div className="lagrille">
			<div className="parent">
				<div className="div1">
					<GridDetail
						positionX={positionX - 4}
						positionY={positionY - 4}
						data={data}
					/>
				</div>
				<div className="div2">
					<GridDetail
						positionX={positionX - 3}
						positionY={positionY - 4}
						data={data}
					/>
				</div>
				<div className="div3">
					<GridDetail
						positionX={positionX - 2}
						positionY={positionY - 4}
						data={data}
					/>
				</div>
				<div className="div4">
					<GridDetail
						positionX={positionX - 1}
						positionY={positionY - 4}
						data={data}
					/>
				</div>
				<div className="div5">
					<GridDetail
						positionX={positionX}
						positionY={positionY - 4}
						data={data}
					/>
				</div>
				<div className="div6">
					<GridDetail
						positionX={positionX + 1}
						positionY={positionY - 4}
						data={data}
					/>
				</div>
				<div className="div7">
					<GridDetail
						positionX={positionX + 2}
						positionY={positionY - 4}
						data={data}
					/>
				</div>
				<div className="div8">
					<GridDetail
						positionX={positionX + 3}
						positionY={positionY - 4}
						data={data}
					/>
				</div>
				<div className="div9">
					<GridDetail
						positionX={positionX + 4}
						positionY={positionY - 4}
						data={data}
					/>
				</div>
				<div className="div10">
					<GridDetail
						positionX={positionX - 4}
						positionY={positionY - 3}
						data={data}
					/>
				</div>
				<div className="div11">
					<GridDetail
						positionX={positionX - 3}
						positionY={positionY - 3}
						data={data}
					/>
				</div>
				<div className="div12">
					<GridDetail
						positionX={positionX - 2}
						positionY={positionY - 3}
						data={data}
					/>
				</div>
				<div className="div13">
					<GridDetail
						positionX={positionX - 1}
						positionY={positionY - 3}
						data={data}
					/>
				</div>
				<div className="div14">
					<GridDetail
						positionX={positionX}
						positionY={positionY - 3}
						data={data}
					/>
				</div>
				<div className="div15">
					<GridDetail
						positionX={positionX + 1}
						positionY={positionY - 3}
						data={data}
					/>
				</div>
				<div className="div16">
					<GridDetail
						positionX={positionX + 2}
						positionY={positionY - 3}
						data={data}
					/>
				</div>
				<div className="div17">
					<GridDetail
						positionX={positionX + 3}
						positionY={positionY - 3}
						data={data}
					/>
				</div>
				<div className="div18">
					<GridDetail
						positionX={positionX + 4}
						positionY={positionY - 3}
						data={data}
					/>
				</div>
				<div className="div19">
					<GridDetail
						positionX={positionX - 4}
						positionY={positionY - 2}
						data={data}
					/>
				</div>
				<div className="div20">
					<GridDetail
						positionX={positionX - 3}
						positionY={positionY - 2}
						data={data}
					/>
				</div>
				<div className="div21">
					<GridDetail
						positionX={positionX - 2}
						positionY={positionY - 2}
						data={data}
					/>
				</div>
				<div className="div22">
					<GridDetail
						positionX={positionX - 1}
						positionY={positionY - 2}
						data={data}
					/>
				</div>
				<div className="div23">
					<GridDetail
						positionX={positionX}
						positionY={positionY - 2}
						data={data}
					/>
				</div>
				<div className="div24">
					<GridDetail
						positionX={positionX + 1}
						positionY={positionY - 2}
						data={data}
					/>
				</div>
				<div className="div25">
					<GridDetail
						positionX={positionX + 2}
						positionY={positionY - 2}
						data={data}
					/>
				</div>
				<div className="div26">
					<GridDetail
						positionX={positionX + 3}
						positionY={positionY - 2}
						data={data}
					/>
				</div>
				<div className="div27">
					<GridDetail
						positionX={positionX + 4}
						positionY={positionY - 2}
						data={data}
					/>
				</div>
				<div className="div28">
					<GridDetail
						positionX={positionX - 4}
						positionY={positionY - 1}
						data={data}
					/>
				</div>
				<div className="div29">
					<GridDetail
						positionX={positionX - 3}
						positionY={positionY - 1}
						data={data}
					/>
				</div>
				<div className="div30">
					<GridDetail
						positionX={positionX - 2}
						positionY={positionY - 1}
						data={data}
					/>
				</div>
				<div className="div31">
					<GridDetail
						positionX={positionX - 1}
						positionY={positionY - 1}
						data={data}
					/>
				</div>
				<div className="div32">
					<GridDetail
						positionX={positionX}
						positionY={positionY - 1}
						data={data}
					/>
				</div>
				<div className="div33">
					<GridDetail
						positionX={positionX + 1}
						positionY={positionY - 1}
						data={data}
					/>
				</div>
				<div className="div34">
					<GridDetail
						positionX={positionX + 2}
						positionY={positionY - 1}
						data={data}
					/>
				</div>
				<div className="div35">
					<GridDetail
						positionX={positionX + 3}
						positionY={positionY - 1}
						data={data}
					/>
				</div>
				<div className="div36">
					<GridDetail
						positionX={positionX + 4}
						positionY={positionY - 1}
						data={data}
					/>
				</div>
				<div className="div37">
					<GridDetail
						positionX={positionX - 4}
						positionY={positionY}
						data={data}
					/>
				</div>
				<div className="div38">
					<GridDetail
						positionX={positionX - 3}
						positionY={positionY}
						data={data}
					/>
				</div>
				<div className="div39">
					<GridDetail
						positionX={positionX - 2}
						positionY={positionY}
						data={data}
					/>
				</div>
				<div className="div40">
					<GridDetail
						positionX={positionX - 1}
						positionY={positionY}
						data={data}
					/>
				</div>
				<div className="centre">
					<img src={perso} alt="perso" id="perso" />
					<GridDetail positionX={positionX} positionY={positionY} data={data} />
				</div>
				<div className="div42">
					<GridDetail
						positionX={positionX + 1}
						positionY={positionY}
						data={data}
					/>
				</div>
				<div className="div43">
					<GridDetail
						positionX={positionX + 2}
						positionY={positionY}
						data={data}
					/>
				</div>
				<div className="div44">
					<GridDetail
						positionX={positionX + 3}
						positionY={positionY}
						data={data}
					/>
				</div>
				<div className="div45">
					<GridDetail
						positionX={positionX + 4}
						positionY={positionY}
						data={data}
					/>
				</div>
				<div className="div46">
					<GridDetail
						positionX={positionX - 4}
						positionY={positionY + 1}
						data={data}
					/>
				</div>
				<div className="div47">
					<GridDetail
						positionX={positionX - 3}
						positionY={positionY + 1}
						data={data}
					/>
				</div>
				<div className="div48">
					<GridDetail
						positionX={positionX - 2}
						positionY={positionY + 1}
						data={data}
					/>
				</div>
				<div className="div49">
					<GridDetail
						positionX={positionX - 1}
						positionY={positionY + 1}
						data={data}
					/>
				</div>
				<div className="div50">
					<GridDetail
						positionX={positionX}
						positionY={positionY + 1}
						data={data}
					/>
				</div>
				<div className="div51">
					<GridDetail
						positionX={positionX + 1}
						positionY={positionY + 1}
						data={data}
					/>
				</div>
				<div className="div52">
					<GridDetail
						positionX={positionX + 2}
						positionY={positionY + 1}
						data={data}
					/>
				</div>
				<div className="div53">
					<GridDetail
						positionX={positionX + 3}
						positionY={positionY + 1}
						data={data}
					/>
				</div>
				<div className="div54">
					<GridDetail
						positionX={positionX + 4}
						positionY={positionY + 1}
						data={data}
					/>
				</div>
				<div className="div55">
					<GridDetail
						positionX={positionX - 4}
						positionY={positionY + 2}
						data={data}
					/>
				</div>
				<div className="div56">
					<GridDetail
						positionX={positionX - 3}
						positionY={positionY + 2}
						data={data}
					/>
				</div>
				<div className="div57">
					<GridDetail
						positionX={positionX - 2}
						positionY={positionY + 2}
						data={data}
					/>
				</div>
				<div className="div58">
					<GridDetail
						positionX={positionX - 1}
						positionY={positionY + 2}
						data={data}
					/>
				</div>
				<div className="div59">
					<GridDetail
						positionX={positionX}
						positionY={positionY + 2}
						data={data}
					/>
				</div>
				<div className="div60">
					<GridDetail
						positionX={positionX + 1}
						positionY={positionY + 2}
						data={data}
					/>
				</div>
				<div className="div61">
					<GridDetail
						positionX={positionX + 2}
						positionY={positionY + 2}
						data={data}
					/>
				</div>
				<div className="div62">
					<GridDetail
						positionX={positionX + 3}
						positionY={positionY + 2}
						data={data}
					/>
				</div>
				<div className="div63">
					<GridDetail
						positionX={positionX + 4}
						positionY={positionY + 2}
						data={data}
					/>
				</div>
				<div className="div64">
					<GridDetail
						positionX={positionX - 4}
						positionY={positionY + 3}
						data={data}
					/>
				</div>
				<div className="div65">
					<GridDetail
						positionX={positionX - 3}
						positionY={positionY + 3}
						data={data}
					/>
				</div>
				<div className="div66">
					<GridDetail
						positionX={positionX - 2}
						positionY={positionY + 3}
						data={data}
					/>
				</div>
				<div className="div67">
					<GridDetail
						positionX={positionX - 1}
						positionY={positionY + 3}
						data={data}
					/>
				</div>
				<div className="div68">
					<GridDetail
						positionX={positionX}
						positionY={positionY + 3}
						data={data}
					/>
				</div>
				<div className="div69">
					<GridDetail
						positionX={positionX + 1}
						positionY={positionY + 3}
						data={data}
					/>
				</div>
				<div className="div70">
					<GridDetail
						positionX={positionX + 2}
						positionY={positionY + 3}
						data={data}
					/>
				</div>
				<div className="div71">
					<GridDetail
						positionX={positionX + 3}
						positionY={positionY + 3}
						data={data}
					/>
				</div>
				<div className="div72">
					<GridDetail
						positionX={positionX + 4}
						positionY={positionY + 3}
						data={data}
					/>
				</div>
				<div className="div73">
					<GridDetail
						positionX={positionX - 4}
						positionY={positionY + 4}
						data={data}
					/>
				</div>
				<div className="div74">
					<GridDetail
						positionX={positionX - 3}
						positionY={positionY + 4}
						data={data}
					/>
				</div>
				<div className="div75">
					<GridDetail
						positionX={positionX - 2}
						positionY={positionY + 4}
						data={data}
					/>
				</div>
				<div className="div76">
					<GridDetail
						positionX={positionX - 1}
						positionY={positionY + 4}
						data={data}
					/>
				</div>
				<div className="div77">
					<GridDetail
						positionX={positionX}
						positionY={positionY + 4}
						data={data}
					/>
				</div>
				<div className="div78">
					<GridDetail
						positionX={positionX + 1}
						positionY={positionY + 4}
						data={data}
					/>
				</div>
				<div className="div79">
					<GridDetail
						positionX={positionX + 2}
						positionY={positionY + 4}
						data={data}
					/>
				</div>
				<div className="div80">
					<GridDetail
						positionX={positionX + 3}
						positionY={positionY + 4}
						data={data}
					/>
				</div>
				<div className="div81">
					<GridDetail
						positionX={positionX + 4}
						positionY={positionY + 4}
						data={data}
					/>
				</div>
				{messageLoad ? <div className="message">{message}</div> : ''}
			</div>
		</div>
	);
};

export default Grid;
