import '../style/Cardboard.css'
import React, { useState, useEffect } from "react";
import cardData from './cardData';
import Card from './Card';

const Cardboard = (props) => {
    const [cardList, setCardList] = useState([]);
    const [clickedCard, setClickedCard] = useState([]);
    let randomCards = cardData;

    const { increaseScore, resetScore } = props;

    const shuffleNewCardList = () => {
        for (let i = randomCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomCards[i], randomCards[j]] = [randomCards[j], randomCards[i]];
        }
        console.log("shuflled");
        randomCards = randomCards.slice(0,10);
        setCardList(randomCards);
    }

    const shuffle = (e) => {
        let tempCardList = [...cardList]
        for (let i = tempCardList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tempCardList[i], tempCardList[j]] = [tempCardList[j], tempCardList[i]];
        }
        setCardList(tempCardList);
        updateCheckedCard(e);
    }

    const updateCheckedCard = (e) => {
        const id = e.target.getAttribute('id');
        if (!clickedCard.includes(id)) {
            increaseScore();
            setClickedCard(clickedCard.concat(id));
        } else {
            resetScore();
            setClickedCard([]);
        }
        console.log(id);
        console.log(clickedCard);
    }

    useEffect(() => {
        shuffleNewCardList();
    },[])


    return (
        <div className='cardboard-container'>
            <Card 
                cardList={cardList} 
                shuffle={shuffle}/>
        </div>
    )
}

export default Cardboard;