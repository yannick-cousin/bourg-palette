import './styles/Grid.css';

const Grid = (props) => {
	return (
		<div className="lagrille">
			<div className="parent">
				<div className="div1"> </div>
				<div className="div2"> </div>
				<div className="div3"> </div>
				<div className="div4"> </div>
				<div className="div5"> </div>
				<div className="div6"> </div>
				<div className="div7"> </div>
				<div className="div8"> </div>
				<div className="div9"> </div>
				<div className="div10"> </div>
				<div className="div11"> </div>
				<div className="div12"> </div>
				<div className="div13"> </div>
				<div className="div14"> </div>
				<div className="div15"> </div>
				<div className="div16"> </div>
				<div className="div17">
					Position X : {props.x - 1} <br />
					Position Y : {props.y - 1}
				</div>
				<div className="div18">
					Position X : {props.x} <br />
					Position Y : {props.y - 1}
				</div>
				<div className="div19">
					Position X : {props.x + 1} <br />
					Position Y : {props.y - 1}
				</div>
				<div className="div20"> </div>
				<div className="div21"> </div>
				<div className="div22"> </div>
				<div className="div23"></div>
				<div className="div24">
					Position X : {props.x - 1} <br />
					Position Y : {props.y}
				</div>
				<div className="centre">
					Le Centre Position X : {props.x} <br />
					Position Y : {props.y}
				</div>
				<div className="div26">
					Position X : {props.x + 1} <br />
					Position Y : {props.y}
				</div>
				<div className="div27"> </div>
				<div className="div28"> </div>
				<div className="div29"> </div>
				<div className="div30"> </div>
				<div className="div31">
					Position X : {props.x - 1} <br />
					Position Y : {props.y + 1}
				</div>
				<div className="div32">
					Position X : {props.x} <br />
					Position Y : {props.y + 1}
				</div>
				<div className="div33">
					Position X : {props.x + 1} <br />
					Position Y : {props.y + 1}
				</div>
				<div className="div34"> </div>
				<div className="div35"> </div>
				<div className="div36"> </div>
				<div className="div37"> </div>
				<div className="div38"> </div>
				<div className="div39"> </div>
				<div className="div40"> </div>
				<div className="div41"> </div>
				<div className="div42"> </div>
				<div className="div43"> </div>
				<div className="div44"> </div>
				<div className="div45"> </div>
				<div className="div46"> </div>
				<div className="div47"> </div>
				<div className="div48"> </div>
				<div className="div49"> </div>
			</div>
		</div>
	);
};

export default Grid;
