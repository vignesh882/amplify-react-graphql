import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
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
          <div id="l"></div><br></br>
          <div id="l1"></div>
          <div id="like_button_container">Hello Friends</div>
        </header>
      </div>

      <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

      <script src="like_button.js"></script>
    </body>
  );
}

export default App;
