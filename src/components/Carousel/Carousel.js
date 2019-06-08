import React from 'react';
import $ from 'jquery';
import './Carousel.css';
const carousel = props => (
    <div className="carousel">
        <ul className="carousel__slideList">
           <li className="carousel__slide">
                <img src="https://via.placeholder.com/2160X1080" ></img>
            </li> 
           <li className="carousel__slide">
                <img src="https://via.placeholder.com/2160X1080" ></img>
            </li> 
           <li className="carousel__slide">
                <img src="https://via.placeholder.com/2160X1080" ></img>
            </li> 
        </ul>
    </div>
);
    <script>
        var currentSlide = 1;
        var $slider = $(".slides");
        var slideCount = slider.children().length;
        setInterval(function() {
            $slider.animate({
                marginLeft: '-100vw'
            } , 800 )
        }, 2000);
    </script>
export default carousel;