import logo from './logo.svg';
import './App.css';

function Bottone(){
  return(
    <button>Ciao</button>
  )
}
function App() {
  const pippo= Bottone();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {pippo}
      </header>
    </div>
  );
}

export default App;
export {Bottone};

