import React from 'react';
import './Card.css';
import Project1 from '../../Img/Projects/project1.jpg';
/*import Project2 from '../../Img/Projects/project2.jpg';
import Project3 from '../../Img/Projects/project3.jpg';*/
class Card extends React.Component {
    render() {
        return (
            <li className="card__list">
                <div className="card">
                    <div className="card-img">
                        <img src={/*this.props.card.img*/Project1} alt="None" className="card-img__img"/>
                    </div>
                    <div className="card-info">
                        <h1 className="card-title">{this.props.card.tit}</h1>
                        <h3>{this.props.card.desc}</h3>
                    </div>
                </div>
            </li>
        )
    }
}

export default Card;