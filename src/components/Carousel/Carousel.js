import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Project1 from '../../img/Projects/project1.jpg';
import Project2 from '../../img/Projects/project2.jpg';
import Project3 from '../../img/Projects/project3.jpg';
import Project4 from '../../img/Projects/project4.jpg';
import Project5 from '../../img/Projects/project5.jpg';
import Project6 from '../../img/Projects/project6.jpg';
import Project7 from '../../img/Projects/project7.jpg';

import './Carousel.css';
export default () => (
  <Carousel className="carousel-wrapper" showThumbs={false} infiniteLoop={true} emulateTouch autoPlay>
    <div>
      <img className="carousel__img" src={Project1} alt="Missing 1"/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img className="carousel__img" src={Project2} alt="Missing 2"/>
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img className="carousel__img" src={Project3} alt="Missing 3"/>
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img className="carousel__img" src={Project4} alt="Missing 4"/>
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img className="carousel__img" src={Project5} alt="Missing 5"/>
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img className="carousel__img" src={Project6} alt="Missing 6"/>
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img className="carousel__img" src={Project7} alt="Missing 7"/>
      <p className="legend">Legend 7</p>
    </div>
  </Carousel>
);
