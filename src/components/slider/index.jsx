import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import First from "../../assets/images/slider/001.jpeg";
import secind from "../../assets/images/slider/002.jpeg";
import third from "../../assets/images/slider/003.jpeg";

const images = [
    { url: First },
    { url: secind },
    { url: third },
];

class Slider extends Component {  
    state = {
        width: window.innerWidth,
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
            let size = window.innerWidth;
            setTimeout(()=>{
                if(size === window.innerWidth){
                    this.setState({width: window.innerWidth, height: window.innerWidth/2.08});
                }
            },100);
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