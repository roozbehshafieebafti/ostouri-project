import React, { Component } from 'react';
import Card from "../../../components/cards";
import Product_1 from "../../../assets/images/products/first.jpeg"
import Product_2 from "../../../assets/images/products/second.jpeg"
import Product_3 from "../../../assets/images/products/third.jpeg"
import Product_4 from "../../../assets/images/products/forth.jpeg"


class Business extends Component {
    render() {
        return (
            <div className="row mt-3 mb-3" style={{position:"relative"}}>
                <div className="col-12 robanHeader mb-4" id="MainBusiness">
                    <b>Main Business</b>
                </div>
                <>
                    <Card src={Product_1}/>
                    <Card src={Product_2}/>
                    <Card src={Product_3}/>
                    <Card src={Product_4}/>
                    <Card src={Product_4}/>
                    <Card src={Product_4}/>
                </>
            </div>
        );
    }
}

export default Business;