import React from 'react';
import { useContext } from 'react'; 
import { AuthContext } from '../App';

export const GameCard = ({game, setCurrentChoice}) => {

    const auth = useContext(AuthContext)
    const handleGameClick = (e,game) => {
        e.preventDefault()
        console.log(game)
        setCurrentChoice({currentGame: game})
    }

    return(
            [(auth.authLGI === false)? 
            <div className='game-cards' id='game'>
                <h2>{game.name}</h2>
                <img src='' alt='Game logo'/>
                <p>{game.description.slice(0, 80)}...</p>
            </div>
            :
            <div onClick={(e) => handleGameClick(e,game)} className='game-cards' id='lgi-game'>
                <h2>{game.name}</h2>
                <img src='' alt='Game logo'/>
                <h4>Players: {game.min_players}-{game.max_players}</h4>
            </div>
            ]
    )
}