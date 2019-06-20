import React from 'react';
import './Showscreen.css';
import '../smallCarousel/smallCarousel'

class Showscreen extends React.Component {
    render() {
        return (
            <div className="showscreen">
                <div className="showscreen__title">
                    <h1 className="title">{this.props.intialDesc}</h1>
                </div>
                <div className="showscreen__content">
                    <div className="showscreen__img">

                    </div>
                    <div className="showscreen__description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi distinctio quas itaque nobis vero libero ducimus iure nesciunt doloremque quaerat, laboriosam perferendis molestias, atque non molestiae eum saepe ipsa! Soluta?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, ipsam. Labore laudantium cumque quia ut, doloremque provident assumenda quidem officia odio porro corrupti praesentium magnam eligendi delectus quisquam vitae dicta.</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Showscreen;