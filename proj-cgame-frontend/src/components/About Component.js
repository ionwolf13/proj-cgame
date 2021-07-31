import React from 'react'

export const AboutComponent = ({games}) => {
    
    console.log(games)
    return(
        <div className="main-cont" id='main-grid'>
            <h1>Select From Any of these Games!</h1>
            <p>Play Against other users!</p>
        </div>
    )
}