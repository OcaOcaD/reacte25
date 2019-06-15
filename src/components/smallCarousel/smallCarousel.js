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
const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault()

  const responsive = {
    768: { items: 2 },
    1024: { items: 5 },
  }
  function changeActualInfo( project ){
    console.log('Changing the Showscreeen img for ');
  }
  return (
    <AliceCarousel mouseDragEnabled
     autoPlay={true}
     autoPlayInterval={3000}
     responsive={responsive}
     dotsDisabled={true}
     buttonsDisabled={true}
     >
      <div className="img__container" alt="Project1" onClick={changeActualInfo}>
        <img src={Project1} onDragStart={handleOnDragStart} alt="Missing1" className="mini_carousel_img" />
        <div className="mini_hidden_background"></div>
        <div className="mini_hidden_desc">
          <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
        </div>
      </div>
      <div className="img__container" alt="Project2" onClick={changeActualInfo}>
        <img src={Project2} onDragStart={handleOnDragStart} alt="Missing2" className="mini_carousel_img" />
        <div className="mini_hidden_background"></div>
        <div className="mini_hidden_desc">
          <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
        </div>
      </div>
      <div className="img__container" alt="Project3" onClick={changeActualInfo}>
        <img src={Project3} onDragStart={handleOnDragStart} alt="Missing3" className="mini_carousel_img" />
        <div className="mini_hidden_background"></div>
        <div className="mini_hidden_desc">
          <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
        </div>
      </div>
      <div className="img__container" alt="Project4" onClick={changeActualInfo}>
        <img src={Project4} onDragStart={handleOnDragStart} alt="Missing4" className="mini_carousel_img" />
        <div className="mini_hidden_background"></div>
        <div className="mini_hidden_desc">
          <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
        </div>
      </div>
      <div className="img__container" alt="Project5" onClick={changeActualInfo}>
        <img src={Project5} onDragStart={handleOnDragStart} alt="Missing5" className="mini_carousel_img" />
        <div className="mini_hidden_background"></div>
        <div className="mini_hidden_desc">
          <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
        </div>
      </div>
      <div className="img__container" alt="Project6" onClick={changeActualInfo}>
        <img src={Project6} onDragStart={handleOnDragStart} alt="Missing6" className="mini_carousel_img" />
        <div className="mini_hidden_background"></div>
        <div className="mini_hidden_desc">
          <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
        </div>
      </div>
      <div className="img__container" alt="Project7" onClick={changeActualInfo}>
        <img src={Project7} onDragStart={handleOnDragStart} alt="Missing7" className="mini_carousel_img" />
        <div className="mini_hidden_background"></div>
        <div className="mini_hidden_desc">
          <h3 className="mini_carousel_desc">Lorem ipsum dolor</h3>
        </div>
      </div>
    </AliceCarousel>
  )
}
export default Gallery;