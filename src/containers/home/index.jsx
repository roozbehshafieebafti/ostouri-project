import React, { Component } from 'react';
import Slider from "../../components/slider";
import Header from "../../components/header";
import Proccessed from "./proccessed";


class Home extends Component {    
    render() {
        return (
            <>
                <Slider />
                <Header />
                <Proccessed />                
            </>
        );
    }
}

export default Home;