import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';
export default () => (
  <Carousel className="carousel-wrapper" showThumbs={false} infiniteLoop={true} emulateTouch autoPlay>
    <div>
      <img className="carousel__img" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="Missing 1"/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img className="carousel__img" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt="Missing 2"/>
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img className="carousel__img" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" alt="Missing 3"/>
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img className="carousel__img" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" alt="Missing 4"/>
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img className="carousel__img" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" alt="Missing 5"/>
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img className="carousel__img" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" alt="Missing 6"/>
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img className="carousel__img" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" alt="Missing 7"/>
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img className="carousel__img" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" alt="Missing 8"/>
      <p className="legend">Legend 8</p>
    </div>
    <div>
      <img className="carousel__img" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" alt="Missing 9"/>
      <p className="legend">Legend 9</p>
    </div>
  </Carousel>
);
