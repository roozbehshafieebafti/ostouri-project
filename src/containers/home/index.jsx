import React, { Component } from 'react';
import Slider from "../../components/slider";
import Header from "../../components/header";


class Home extends Component {    
    render() {
        return (
            <>
                <Slider />
                <Header />
            </>
        );
    }
}

export default Home;