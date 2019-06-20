import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import './smallCarousel.css';

import Project1 from '../../Img/Projects/project1.jpg';
import Project2 from '../../Img/Projects/project2.jpg';
import Project3 from '../../Img/Projects/project3.jpg';
import Project4 from '../../Img/Projects/project4.jpg';
import Project5 from '../../Img/Projects/project5.jpg';
import Project6 from '../../Img/Projects/project6.jpg';
import Project7 from '../../Img/Projects/project7.jpg';
export class Gallery extends React.Component {
  constructor(props) {
    super();
    this.handleOnDragStart = e => e.preventDefault();
    this.responsive = {
      768: { items: 2 },
      1024: { items: 5 },
    }
    this.state = {
      screenDesc: "Changed description"
    }
  }
  onChangeDesc() {
    this.props.changeDesc(this.state.screenDesc);
  }
  slides = [
    {
    description: 'Random description for a building.',
    img: 'Project1'
    },  {
    description: 'Descriptao for da bildingao.',
    img: 'Project2'
    },  {
    description: 'Sikesi ahre. sí jalo jaja.',
    img: 'Project3'
    }
  ];
  render(){
    return (
      <div className="showscreen__smallCarousel">
        <AliceCarousel mouseDragEnabled
        autoPlay={true}
        autoPlayInterval={3000}
        responsive={this.responsive}
        dotsDisabled={true}
        buttonsDisabled={true}
        >
          <div className="img__container" alt="Project1">
            <img src={Project1} onDragStart={this.handleOnDragStart} alt="Missing1" className="mini_carousel_img" />
            <div className="mini_hidden_background"></div>
            <div className="mini_hidden_desc">
              <h3 className="mini_carousel_desc">Description to this</h3>
            </div>
          </div>
          <div className="img__container" alt="Project2">
            <img src={Project2} onDragStart={this.handleOnDragStart} alt="Missing2" className="mini_carousel_img" />
            <div className="mini_hidden_background"></div>
            <div className="mini_hidden_desc">
              <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
            </div>
          </div>
          <div className="img__container" alt="Project3">
            <img src={Project3} onDragStart={this.handleOnDragStart} alt="Missing3" className="mini_carousel_img" />
            <div className="mini_hidden_background"></div>
            <div className="mini_hidden_desc">
              <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
            </div>
          </div>
          <div className="img__container" alt="Project4">
            <img src={Project4} onDragStart={this.handleOnDragStart} alt="Missing4" className="mini_carousel_img" />
            <div className="mini_hidden_background"></div>
            <div className="mini_hidden_desc">
              <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
            </div>
          </div>
          <div className="img__container" alt="Project5">
            <img src={Project5} onDragStart={this.handleOnDragStart} alt="Missing5" className="mini_carousel_img" />
            <div className="mini_hidden_background"></div>
            <div className="mini_hidden_desc">
              <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
            </div>
          </div>
          <div className="img__container" alt="Project6">
            <img src={Project6} onDragStart={this.handleOnDragStart} alt="Missing6" className="mini_carousel_img" />
            <div className="mini_hidden_background"></div>
            <div className="mini_hidden_desc">
              <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
            </div>
          </div>
          <div className="img__container" alt="Project7">
            <img src={Project7} onDragStart={this.handleOnDragStart} alt="Missing7" className="mini_carousel_img" />
            <div className="mini_hidden_background"></div>
            <div className="mini_hidden_desc">
              <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
            </div>
          </div>
        </AliceCarousel>
        <button onClick={this.onChangeDesc.bind(this)} >Change desc</button>
      </div>
    );

  }
}
export default Gallery;