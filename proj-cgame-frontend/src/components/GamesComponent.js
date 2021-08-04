import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { GameCard } from './GameCard';
import { useHistory } from 'react-router';

export const GamesComponent = ({games, currentUser, setCurrentUser}) => {

    let history = useHistory();

    const [currentChoice, setCurrentChoice] = useState({currentGame: "none"})
    
    const handlePlayGame = (e) => {
        e.preventDefault()
        let urlAdapter = 'http://localhost:3001/game_sessions'
        let game_session = {
            user_id: currentUser.newData.id,
            game_id: currentChoice.currentGame.id
        }
        axios({
            method: 'POST',
            url: urlAdapter,
            data: { game_session }
        })
        .then(res => {
            console.log(res.data.gameSession)
            let newData = JSON.parse(res.data.gameSession)
            setCurrentUser({...currentUser, currentSession: newData})
            history.push('/userCurrentGame')
        })
    }

    return(
        <div className="main-cont" id='games-grid'>
            <div className='second-cont' id='all-games-section'>
                <h1 id='all-games-header' >All Games</h1>
                {games.data.map(game => <GameCard game={game} setCurrentChoice={setCurrentChoice}/>)}
            </div>
            <div className='second-cont' id='game-info'>
                <h1>Current Game</h1>
                {(currentChoice.currentGame === "none")? 
                null
                :
                 <div>
                     <GameCard game={currentChoice.currentGame}/>
                     <h4>Goals: </h4>
                     <p>{currentChoice.currentGame.description}</p>
                     <h4>Rules:</h4>
                     <p>{currentChoice.currentGame.rules}</p>
                     <button onClick={e => handlePlayGame(e)}>Play Game</button>
                 </div>
                 }
            </div>
        </div>
    )
}