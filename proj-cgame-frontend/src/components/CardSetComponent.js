import React from 'react';
import backCard from '../pictures/backCard.jpg'

export const CardSetComponent = () => {

    return(
        <div className='back-card' >
            <img className='card' src={backCard} alt='Back of Card' height='150' />
            <p className='back-card-num'> Cards Left: <bold> 52 </bold> </p>
        </div>
    )
}