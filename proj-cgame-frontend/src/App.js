import './App.css';
import { useContext, useState, React} from 'react';
import { MainComponent } from './components/MainComponent.js';
import { NavComponent } from './components/NavComponent.js';
import logo from './pictures/cardGameLogo.png';

function App() {

  const [authData, setAuthData] = useState({auth: false, ulgi: false})
  
  const authContext = useContext(authData);
  
  console.log(authContext)

  return (
    <div className="main-cont" id='main-grid'>
      <header className='main-cont' id='main-header'>
        <h1>
          <img className='header-detail' id='header-logo' src={logo} alt='Project CGame Logo' height='75'/>
          Project CGame
        </h1>
      </header>
      <NavComponent />
      <MainComponent />
    </div>
  );
}

export default App;
