import React, { Component } from 'react';

class Proccessed extends Component {
    
    render() {
        
        return (
            <>
                <h3 className="how-h3 mt-5">How are these products proccessed? </h3>
                <div className="how-product-content pl-1 pr-1 bg-dark mb-5">
                    <div className="row">
                        <div className="how-product-content-part-1 col-xl-4 col-md-5 col-12 bg-danger">
                            <div className="how-product-content-part-1">
                                content
                            </div>
                        </div>
                        <div className="how-product-content-part-2 col-xl-8 col-md-7 col-12 bg-info">

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Proccessed;