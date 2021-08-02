import React from 'react';
import { useState } from 'react';

export const GameRoomComponent = ({currentUser}) => {

    const [optionChosen, setOptionChosen] = useState({option: false})
    const selectGameType = (e) => {
        e.preventDefault()
        setOptionChosen({option: true})
        console.log(optionChosen)
    }

    const warFunction = (e) => {
        e.preventDefault()
        console.log("Lets Have War!!!")
    }

    return(
        [(optionChosen.option === false)? 
            <div className='second-cont' id='all-games-section'>
                <h2>Pick A Chose</h2>
                <button onClick={e => selectGameType(e)}>solo</button>
            </div>
            :
            <div className='second-cont' id='current-game'>
                <h2>Begin Game!</h2>
                <div className='game-players' id='individual-player'>
                    <h2>AI</h2>
                </div>
                <button onClick={e => warFunction(e)}>War!</button>
                <div className='game-players' id='individual-player'>
                    <h2>{currentUser.newData.username}</h2>
                </div>
            </div>
            ]   
    )
}