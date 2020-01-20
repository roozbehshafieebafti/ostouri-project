import React, { Component } from 'react';
import Business from "../business";

class Proccessed extends Component {
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
            <>
                <div className="how-product-proccess container" style={{position:"relative", top: height}}>
                    <h3 className="how-h3">How are these products proccessed? </h3>
                    <div className="how-product-content pl-1 pr-1 bg-dark">
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
                    <Business />
                </div>
            </>
        );
    }
}

export default Proccessed;