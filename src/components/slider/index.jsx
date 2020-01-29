import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import Img1 from "../../assets/images/slider/001.jpg";
import Img2 from "../../assets/images/slider/002.jpg";
import Img3 from "../../assets/images/slider/003.jpg";
import Img4 from "../../assets/images/slider/004.jpg";
import Img5 from "../../assets/images/slider/005.jpg";
import Img6 from "../../assets/images/slider/006.jpg";

const images = [
    { url: Img1 },
    { url: Img2 },
    { url: Img3 },
    { url: Img4 },
    { url: Img5 },
    { url: Img6 },
];

class Slider extends Component {  
    state = {
        width: window.innerWidth-17,
        height: window.innerWidth/2.08
    } 
    componentDidMount(){
        let length = document.getElementsByClassName('image-slider-bullets').length;
        let node = document.getElementsByClassName('image-slider-bullets');
        let index = 0;
        setInterval(()=>{
            if(index<length-1){
                index++;
            }else{
                index=0;
            }            
            node[index].click();
        },5000);
        window.addEventListener('resize',()=>{
            let size = window.innerWidth-17;
            setTimeout(()=>{
                if(size === window.innerWidth){
                    this.setState({width: window.innerWidth, height: window.innerWidth/2.08});
                }
            },10);
        })
    }
    render() {
        return (
            <div className="slider" style={{zIndex:0}}>
                <SimpleImageSlider
                    width={this.state.width}
                    height={this.state.height}
                    images={images}
                    slideDuration={1}
                />  
            </div>
        );
    }
}

export default Slider;