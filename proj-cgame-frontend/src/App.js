import './App.css';
import { MainComponent } from './components/MainComponent.js';
import logo from './pictures/cardGameLogo.png';

function App() {
  return (
    <div className="main-cont" id='main-grid'>
      <header className='main-cont' id='main-header'>
        <h1>
          <img className='header-detail' id='header-logo' src={logo} alt='Project CGame Logo' height='75'/>
          Project CGame
        </h1>
      </header>
      <MainComponent />
    </div>
  );
}

export default App;
