import React, { Component } from 'react';

import Img1 from '../../../assets/images/proccess/1.jpg'
import Img2 from '../../../assets/images/proccess/2.jpg'
import Img3 from '../../../assets/images/proccess/3.jpg'
import Img4 from '../../../assets/images/proccess/4.jpg'
import Img5 from '../../../assets/images/proccess/5.jpg'
import Img6 from '../../../assets/images/proccess/6.JPG'

class Proccessed extends Component {
    
    render() {
        
        return (
            <div style={{marginTop: 70, marginBottom:50}}>
                <div className="how-product-content pl-1 pr-1 mb-5" style={{marginTop: 70}}>
                    <div className="row">
                        <div className="how-product-content-part-1 col-xl-4 col-md-5 col-12 border border-dark d-flex align-items-center">
                            <div className="how-product-content-part-1 pr-2 pl-2" style={{minHeight: 200, textAlign: 'justify', fontSize: 17 , fontWeight: "bold"}}>
                            Our employees are trained to find top farmers with best crops. We begin our works some months before harvesting to find premium quality with competitive price to bring a win-win result between us and our customers.
                            After choosing the crop we control the process of sorting with advanced machines to have crop that meet the expectation of our customers
                            </div>
                        </div>
                        <div className="how-product-content-part-2 col-xl-8 col-md-7 col-12">
                            <div className="d-flex justify-content-center ">
                                <div className="proccess-img-container">
                                    <img className="proccess-image" src={Img1} alt=""/>
                                </div>
                                <div className="proccess-img-container">
                                    <img className="proccess-image" src={Img2} alt=""/>
                                </div>
                                <div className="proccess-img-container">
                                    <img className="proccess-image" src={Img3} alt=""/>
                                </div>
                            </div>   
                            <div className="d-flex justify-content-center ">    
                                <div className="proccess-img-container">
                                    <img className="proccess-image" src={Img4} alt=""/>
                                </div>
                                <div className="proccess-img-container">
                                    <img className="proccess-image" src={Img5} alt=""/>
                                </div>
                                <div className="proccess-img-container">
                                    <img className="proccess-image" src={Img6} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Proccessed;