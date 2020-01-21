import React, { Component } from 'react';
import Slider from "../../components/slider";
import Header from "../../components/header";
import Proccessed from "./proccessed";
import Business from "./business";
import News from "./news";
class Home extends Component {   
    state={
        height: window.innerWidth/2.25
    }
    componentDidMount= ()=> {
        window.addEventListener('resize',()=>{
            let size = window.innerWidth;
            setTimeout(()=>{
                if(size === window.innerWidth){
                    this.setState({height: window.innerWidth/2.25});
                }
            },100);
        })
    } 
    render() {
        const { height } = this.state;
        return (
            <div style={{scrollBehavior:"smooth"}}>
                <Slider />
                <Header />
                <div className="how-product-proccess container" style={{position:"relative", top: height}}>
                    <Proccessed />
                    <Business />
                    <News />           
                </div>
            </div>
        );
    }
}

export default Home;