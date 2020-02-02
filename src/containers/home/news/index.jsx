import React, { Component } from 'react';
import News_1 from "../../../assets/images/news/banner.jpg"

class News extends Component {
    render() {
        return (
            <div id="news" className="row mt-3 mb-3" style={{position:"relative", paddingTop:70, paddingBottom:40}}>
                <div className="col-12 robanHeader mb-4" id="MainBusiness">
                    <b className="h4">News</b>
                </div>
                <div>
                    <div className="col-12 pr-2 pl-2 mb-5">
                        <div className="col-xl-8 col-12">
                            <img src={News_1} style={{...syles.images, boxShadow: '0px 0px 10px gray'}} alt="news"/>
                        </div>
                        <div className="col-12">
                            <div className="mt-2">
                            A Taste Of What’s To Come - Gulfood 2020 <br/>
                            Question, taste, talk and engage with all that's breaking new ground in the evolving food industry. <br/>
                            From fascinating new flavours to industry-shifting innovations and multi-million dollar export deals, Gulfood is the place to experience all the key moments driving the F&B industry forward and to see all the mega-trends come alive, like never before.
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const syles={
    images:{
        width: '50%',
        height: '50%'
    }
}

export default News;