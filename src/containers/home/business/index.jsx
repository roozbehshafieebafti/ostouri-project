import React, { Component } from 'react';
import Card from "../../../components/cards";
import Product_1 from "../../../assets/images/products/5.jpg"
import Product_2 from "../../../assets/images/products/6.jpg"
import Product_3 from "../../../assets/images/products/9.jpg"
import Product_4 from "../../../assets/images/products/8.jpg"
import Product_5 from "../../../assets/images/products/13.jpg"
import Product_6 from "../../../assets/images/products/11.jpg"


class Business extends Component {
    render() {
        return (
            <div id="_mainBusiness" className="row mt-3 mb-3" style={{position:"relative", paddingTop: 80}}>
                <div className="col-12 robanHeader mb-4" id="MainBusiness">
                    <b className="h4">Main Business</b>
                </div>
                <>
                    <Card name="Kidney Beens Series" src={Product_1}/>
                    <Card name="Chickpeas Series" src={Product_2}/>
                    <Card name="Lentils Series" src={Product_3}/>
                    <Card name="Oilseed Series" src={Product_4}/>
                    <Card name="Dried Fruit" src={Product_5}/>
                    <Card name="Nuts" src={Product_6}/>
                </>
            </div>
        );
    }
}

export default Business;