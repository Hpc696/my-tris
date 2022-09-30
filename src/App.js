import logo from './tic-tac-toe-game-svgrepo-com.svg';
import './App.css';
import './Gioca.js';

function Bottone(){
  Giocare();
  return(
    <button>GIOCA</button>
    
    //esegui js gioco?
  )
}

function Giocare(){
  
}
//implementare poi nuove funzionalità: 'nuova partita', 'punteggio salvato'  ...  poi vs pc con difficoltà selezonabile ?-? 
function App() {
  const gioca= Bottone();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100} height={100} />
        {gioca}
      </header>
    </div>
  );
}

export default App;
export {Bottone};

