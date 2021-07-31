import React from 'react';
import { useState } from 'react';
import { GameCard } from './GameCard';

export const GamesComponent = ({games}) => {

    const [currentChoice, setCurrentChoice] = useState({currentGame: "none"})
    console.log(games)
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
                     <button >Play Game</button>
                 </div>
                 }
            </div>
        </div>
    )
}