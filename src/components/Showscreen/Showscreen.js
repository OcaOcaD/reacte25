import React from 'react';
import './Showscreen.css';
import '../smallCarousel/smallCarousel'
import SmallCarousel from '../smallCarousel/smallCarousel';
class Showscreen extends React.Component {
    constructor(){
        super();
        this.state = ({
            desc: intialDesc
        });
    }

    onChangeLink() {
        this.props.changeDesc(this.state.desc);
    }
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
                        <p>{this.state.desc}</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, ipsam. Labore laudantium cumque quia ut, doloremque provident assumenda quidem officia odio porro corrupti praesentium magnam eligendi delectus quisquam vitae dicta.</p>
                    </div>
                </div>
                <div className="showscreen__smallCarousel">
                    <SmallCarousel />
                </div>
            </div>
        )
    }
}

export default Showscreen;