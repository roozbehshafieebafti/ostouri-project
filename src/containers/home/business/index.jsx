import React, { Component } from 'react';
import Card from "../../../components/cards";
import Product_1 from "../../../assets/images/products/first.jpeg"
import Product_2 from "../../../assets/images/products/second.jpeg"
import Product_3 from "../../../assets/images/products/third.jpeg"
import Product_4 from "../../../assets/images/products/forth.jpeg"


class Business extends Component {
    render() {
        return (
            <div id="_mainBusiness" className="row mt-3 mb-3" style={{position:"relative"}}>
                <div className="col-12 robanHeader mb-4" id="MainBusiness">
                    <b>Main Business</b>
                </div>
                <>
                    <Card name="Dried Fruit" src={Product_1}/>
                    <Card name="Oilseed Series" src={Product_2}/>
                    <Card name="Dried Fruit" src={Product_3}/>
                    <Card name="Oilseed Series" src={Product_4}/>
                    <Card name="Dried Fruit" src={Product_4}/>
                    <Card name="Oilseed Series" src={Product_4}/>
                </>
            </div>
        );
    }
}

export default Business;