import logo from './logo.svg';
import './App.scss';
import classes from './App.module.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text">
          Sass Variables
        </p>

        <p className={classes.App}>
          Sass Module
        </p>
      </header>
    </div>
  );
}

export default App;
