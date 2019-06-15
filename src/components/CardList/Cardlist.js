import React from 'react';
import Card from '../Card/Card';
import './Cardlist.css';

class CardList extends React.Component{
    render() {
        return (
            <div className="cardList__container">
                <div className="cardList__title">
                    <h1 className="cardList__title">¿Qué hacemos?</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis itaque, suscipit nam quaerat repudiandae dolores sit assumenda, reiciendis a beatae explicabo iure amet perferendis ut expedita, odit tenetur sequi.</h2>
                </div>
                <div className="cards__rectangle">
                    <ul className="cardList">
                        {this.props.cards.map( (card) =>{
                            return <Card card={card}/>
                        } )
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CardList;