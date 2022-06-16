import '../style/Card.css'
import React, { useState, useEffect } from "react";

const Card = (props) => {
    let { cardList, shuffle } = props;
    return (

        cardList.map(card => {
            return (
                <div className='card-container' onClick={(e) => shuffle(e)} key={card.id}>
                    <img src={card.src} alt={card.cardName} id={card.id}></img>
                    <h3 id={card.id}>{card.cardName}</h3>
                </div>
            )
        })
    )
}

export default Card;