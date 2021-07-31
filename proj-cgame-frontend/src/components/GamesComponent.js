import React from 'react';

export const GamesComponent = ({games}) => {
    console.log(games)
    return(
        <div className="main-cont" id='games-grid'>
            <div className='second-cont' id='profile-section'>
                <h3>All Games</h3>
            </div>
            <div className='second-cont' id='profile-section'>
                <h3>Pick A Game</h3>
            </div>
        </div>
    )
}