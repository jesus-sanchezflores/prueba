import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem />
      <TodoItem />
      <TodoItem />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> yaaaa 3337777 guarda cds444 para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem(){
  return(
    <li>
      <span>V</span>
      <p>A llorar a la lloreria</p>
      <span>X</span>
    </li>
  );
}

export default App;
