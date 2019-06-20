import React from 'react';
import './Slide.css';
import Project1 from '../../Img/Projects/project1.jpg';
/*import Project2 from '../../Img/Projects/project2.jpg';
import Project3 from '../../Img/Projects/project3.jpg';*/
class Slide extends React.Component {
    render() {
        return (
            <div className="img__container">
                <img src={Project1} onDragStart={this.handleOnDragStart} alt="Missing1" className="mini_carousel_img" />
                <div className="mini_hidden_background"></div>
                <div className="mini_hidden_desc">
                <h3 className="mini_carousel_desc">Description to this</h3>
                </div>
            </div>
        )
    }
}

export default Slide;