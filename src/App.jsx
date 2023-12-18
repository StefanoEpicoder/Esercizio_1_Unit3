import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent content="Clicca!!" buttonStyle={{ backgroundColor: "yellow", marginTop: "3rem" }} />
        <ImageComponent
          src="https://i.natgeofe.com/k/830b5d15-92db-429f-a80a-cc89b5700af5/mt-everest.jpg?w=1084.125&h=745.5"
          alt="mountains"
        />
      </header>
    </div>
  );
}

export default App;
