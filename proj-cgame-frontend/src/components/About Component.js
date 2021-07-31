import React from 'react'
import { GameContainer } from './GameContainer'

export const AboutComponent = ({games}) => {

    return(
        <div className="main-cont" id='about-cont'>
            <h1>Select From Any of these Games!</h1>
            <h2>Play Against other users!</h2>
            <GameContainer games={games}/>
        </div>
    )
}