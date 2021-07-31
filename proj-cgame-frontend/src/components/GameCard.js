import React from 'react';
import { useContext } from 'react'; 
import { AuthContext } from '../App';

export const GameCard = ({game}) => {

    const auth = useContext(AuthContext)

    return(
            [(auth.authLGI === false)? 
            <div className='game-cards' id='game'>
                <h2>{game.name}</h2>
                <img src='' alt='Game logo'/>
                <p>{game.description.slice(0, 80)}</p>
            </div>
            :
            <div className='game-cards' id='game'>
                
            </div>
            ]
    )
}