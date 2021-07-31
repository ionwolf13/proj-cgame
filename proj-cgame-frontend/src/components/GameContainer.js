import React from 'react';
import { GameCard } from './GameCard';

export const GameContainer = ({ games }) => {
    return(
        <div className='second-cont' id='about-games'>
            {games.data.map(game => <GameCard game={game}/>)}
            <h3>and many more!</h3>
        </div>
    )
}