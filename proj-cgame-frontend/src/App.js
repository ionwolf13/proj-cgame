import './App.css';
import { useState, React, createContext} from 'react';
import { MainComponent } from './components/MainComponent.js';
import logo from './pictures/cardGameLogo.png';

export const AuthContext = createContext()
export const updateAuthContext = createContext()

function App() {

  const [games, setGames] = useState({})
  // const [authData, setAuthData] = useState({authLGI:false})

  const updateAuth = () => {
    authData = !authData
  }


  return (
    <div className="main-cont" id='main-grid'>
      <header className='main-cont' id='main-header'>
        <h1>
          <img className='header-detail' id='header-logo' src={logo} alt='Project CGame Logo' height='75'/>
          Project CGame
        </h1>
      </header>
      <AuthContext.Provider value={authData}>
        <updateAuthContext.Provider value={updateAuth}>
        <MainComponent games={games} setGames={setGames} setAuthData={setAuthData}/>
        </updateAuthContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
