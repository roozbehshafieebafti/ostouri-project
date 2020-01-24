import React, { Component } from 'react';
import News_1 from "../../../assets/images/news/News3.jpg"

class News extends Component {
    render() {
        return (
            <div id="news" className="row mt-3 mb-3" style={{position:"relative"}}>
                <div className="col-12 robanHeader mb-4" id="MainBusiness">
                    <b>News</b>
                </div>
                <div>
                    <div className="col-12 pr-2 pl-2 mb-5">
                        <img src={News_1} style={syles.images} alt="news"/>
                        <div className="mt-2">
                            In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const syles={
    images:{
        // width: ,
        height: 90
    }
}

export default News;