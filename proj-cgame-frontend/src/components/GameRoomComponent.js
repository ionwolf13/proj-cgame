import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { CardSetComponent } from './CardSetComponent';
import { DrawCardComponent } from './DrawCardComponent';

export const GameRoomComponent = ({currentUser, cards}) => {
    
    const [optionChosen, setOptionChosen] = useState({option: false})
    const [deck, setDeck] = useState({})

    const selectGameType = (e) => {
        e.preventDefault()
        setOptionChosen({option: true})
        let data = null
        let urlAdapter1 = 'http://localhost:3001/decks'
        axios({
            method: "POST",
            url: urlAdapter1,
            data: {deck: {total_cards: 0}}
        })
        .then(res => {
            data = res.data.deck
            setDeck({data})
            createCards(data)
        })
    }

    const createCards = (deckData) => {
    
        let urlAdapter = `http://localhost:3001/card_decks`
        cards.cards.map(card => {
        
        let card_deck = {card_id: card.id, deck_id: deckData.id, game_session_id: currentUser.currentSession.id}
            axios({
                method: "POST",
                url: urlAdapter,
                data: {card_deck}
            })
            .then(res => console.log(res.data))
        })
    }



    const warFunction = (e) => {
        e.preventDefault()
        console.log("Lets Have War!!!")
    }

    return(
        [(optionChosen.option === false)? 
            <div className='second-cont' id='all-games-section'>
                <h2>Pick A Choice</h2>
                <button onClick={e => selectGameType(e)}>solo</button>
            </div>
            :
            <div className='second-cont' id='current-game'>
                <h2>Begin Game!</h2>
                <div className='game-players' id='individual-player'>
                    <h2>AI</h2>
                    <DrawCardComponent />
                    <CardSetComponent />
                </div>
                <button onClick={e => warFunction(e)}>War!</button>
                <div className='game-players' id='individual-player'>
                    <h2>{currentUser.newData.username}</h2>
                    <DrawCardComponent />
                    <CardSetComponent />
                </div>
            </div>
            ]   
    )
}