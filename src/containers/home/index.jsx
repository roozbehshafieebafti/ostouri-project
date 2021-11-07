import React, { Component } from 'react';
import Slider from "../../components/slider";
import Header from "../../components/header";
import Proccessed from "./proccessed";
import Business from "./business";
import News from "./news";
import Footer from "./footer";
class Home extends Component {   
    render() {
        return (
            <div style={{scrollBehavior:"smooth"}}>
                <Slider />
                <Header />
                <div className="how-product-proccess container">
                    <Proccessed />
                    <Business />
                    <News />  
                    <Footer />         
                </div>
            </div>
        );
    }
}

export default Home;