import React, { Component } from 'react';
import Logo from "../../../assets/images/logos/logo.png"

class Footer extends Component {
    render() {
        return (
            <>
                <div id="footer" className="row mt-3" style={{position:"relative"}}>
                    <div className="col-12 robanHeader mb-4" id="MainBusiness">
                        <b>About & Conect us</b>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-xl-4 col-md-6 col-12 ">
                        <img src={Logo} alt="ostouri" style={{width: '30%'}}/>
                    </div>
                    <div className="col-xl-8 col-md-6 col-12 ">
                    In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;