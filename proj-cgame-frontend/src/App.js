import './App.css';
import { useState, React, createContext, useEffect} from 'react';
import axios from 'axios';
import { MainComponent } from './components/MainComponent.js';
import logo from './pictures/cardGameLogo.png';

export const AuthContext = createContext()

function App() {

  const [games, setGames] = useState({})
  const [authData, setAuthData] = useState({authLGI:false})

  useEffect(() => {
    axios.get('http://localhost:3001/games')
    .then(res => updateGames(res.data))
  },[])
  
  const updateGames = (data) => {
    setGames({data})
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
        <MainComponent games={games} setGames={setGames} setAuthData={setAuthData}/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
