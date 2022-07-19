import Board from "./Board";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="App-header">Lights <span className='App-header-accent'>O</span>ut</h1>
      </div>
      <div className="App-board"> 
        <Board />
      </div>
    </div>
  );
}

export default App;
