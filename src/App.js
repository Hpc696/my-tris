import logo from './tic-tac-toe-game-svgrepo-com.svg';
import React from 'react';
import Game from './components/Game';
import './App.css';

const App = () => </Game> ;
const Casella = ({props, value, onClick }) => (
    <>
    <button onClick={props.onClick}>{props.value}</button><button style={stylecas} onClick={onClick}>
    {value}
    </button>
  </>
);
/*<div style={styletab}>
  <Casella value="1" onClick={() => onclick("dummy value")}/>
  <Casella value="2" onClick={() => onclick("dummy value")}/>
  <Casella value="3" onClick={() => onclick("dummy value")}/>
  <Casella value="4" onClick={() => onclick("dummy value")}/>
  <Casella value="5" onClick={() => onclick("dummy value")}/>
  <Casella value="6" onClick={() => onclick("dummy value")}/>
  <Casella value="7" onClick={() => onclick("dummy value")}/>
  <Casella value="8" onClick={() => onclick("dummy value")}/>
  <Casella value="9" onClick={() => onclick("dummy value")}/>
</div>*/
const Tabella = ({ caselle, onClick }) => (
	<div style={styletab}>
  {caselle.map((casella, i) => (
    <Casella key={i} value={casella} onClick={() => onClick(i)} />
  ))}
</div>
);
const Inserimento = (i) => {
	const copiatabella = [...tabella];
	// Se clicchi casella già occupata o partita già finita non ritornare nulla
	if (vincente || copiatabella[i]) return;
	// Inserimento di X / O
	copiatabella[i] = xprossimo ? "X" : "O";
	setTabella(copiatabella);
	setXprossimo(!xprossimo);
};

const [tabella, setTabella] = useState(Array(9).fill(null));
const [xprossimo, setXprossimo] = useState(true);
const vincente = Vittoria(tabella);

const stylecas = {
	background: "lightblue",
	border: "2px solid darkblue",
	fontSize: "30px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
};
const styletab = {
  border: "4px solid darkblue",
	borderRadius: "10px",
	width: "250px",
	height: "250px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

export function Vittoria(Casella){
  const linee = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < linee.length; i++) {
		const [a, b, c] = linee[i];
		if (Casella[a] && Casella[a] === Casella[b] && Casella[a] === Casella[c]) {
			return Casella[a];
		}
	}

}

export default App;
