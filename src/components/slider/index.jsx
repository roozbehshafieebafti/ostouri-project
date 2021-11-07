import React, { Component } from 'react';
import Slider from "react-slick";
// 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../../assets/images/slider/001.jpg";
import Img2 from "../../assets/images/slider/002.jpg";
import Img3 from "../../assets/images/slider/003.jpg";
import Img4 from "../../assets/images/slider/004.jpg";
import Img5 from "../../assets/images/slider/005.jpg";
import Img6 from "../../assets/images/slider/006.jpg";

class SliderComponent extends Component {     
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 6000,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="slider-image">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="slider-image">
                        <img src={Img2} alt="" />
                    </div>
                    <div className="slider-image">
                        <img src={Img3} alt="" />
                    </div>
                    <div className="slider-image">
                        <img src={Img4} alt="" />
                    </div>
                    <div className="slider-image">
                        <img src={Img5} alt="" />
                    </div>
                    <div className="slider-image">
                        <img src={Img6} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SliderComponent;