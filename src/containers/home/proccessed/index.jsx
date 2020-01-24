import React, { Component } from 'react';

import Img1 from '../../../assets/images/proccess/1.jpg'
import Img2 from '../../../assets/images/proccess/2.jpg'
import Img3 from '../../../assets/images/proccess/3.jpg'
import Img4 from '../../../assets/images/proccess/4.jpg'
import Img5 from '../../../assets/images/proccess/5.jpg'

class Proccessed extends Component {
    
    render() {
        
        return (
            <>
                <h3 className="how-h3 mt-1">How are these products proccessed? </h3>
                <div className="how-product-content pl-1 pr-1 mb-5">
                    <div className="row">
                        <div className="how-product-content-part-1 col-xl-4 col-md-5 col-12 border border-dark">
                            <div className="how-product-content-part-1 text-white">
                                content
                            </div>
                        </div>
                        <div className="how-product-content-part-2 col-xl-8 col-md-7 col-12">
                            <div className="row">
                                <div className="col-4 mb-2">
                                    <img className="proccess-image" src={Img1} alt=""/>
                                </div>
                                <div className="col-4 mb-2">
                                    <img className="proccess-image" src={Img2} alt=""/>
                                </div>
                                <div className="col-4 mb-2">
                                    <img className="proccess-image" src={Img3} alt=""/>
                                </div>
                                <div className="col-4 mb-2">
                                    <img className="proccess-image" src={Img4} alt=""/>
                                </div>
                                <div className="col-4 mb-2">
                                    <img className="proccess-image" src={Img5} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Proccessed;