import React, { Component } from 'react';
import Logo from "../../../assets/images/logos/logo.png";
import insta from "../../../assets/images/social/insta.jpg"
import mail from "../../../assets/images/social/mail.jpg"
import map from "../../../assets/images/social/map.jpg"
import phone from "../../../assets/images/social/phone.png"
import tel from "../../../assets/images/social/tel.png"
import wats from "../../../assets/images/social/wats.png"

class Footer extends Component {
    render() {
        return (
            <div style={{marginTop: 90, paddingBottom:30}}>
                <div id="footer" className="row mt-3" style={{position:"relative", marginBottom:2}}>
                    <div className="col-12 robanHeader" id="MainBusiness">
                        <b className="h4">About & Conect us</b>
                    </div>
                </div>
                <div className="row mb-3 ">
                    <div className="col-xl-4 col-md-6 col-12 pt-4 pl-3 border border-dark">
                        <div >
                            <img src={Logo} alt="ostouri" style={{width: '30%'}}/>                            
                        </div>
                        <div>
                            <div>
                                <img src={wats} alt="" style={{width: 34,marginBottom:4}} />
                                <a className="text-danger" style={{display:'inline-block',marginLeft: 20}} target="_blank" href={'https://wa.me/0989137053711'}>09123456789</a>
                            </div>
                            <div>
                                <img src={tel} alt="" style={{width: 30,  marginBottom:4}}/>
                                <a style={{display:'inline-block',marginLeft: 20}} target="_blank" href={'https://t.me/khaajoo'}>09123456789</a>
                            </div>
                            <div>
                                <img src={phone} alt="" style={{width: 30,  marginBottom:4}}/>
                                <span style={{display:'inline-block',marginLeft: 20}}>09123456789</span>
                            </div>
                            <div>
                                <img src={mail} alt="" style={{width: 30,  marginBottom:4}}/>
                                <a style={{display:'inline-block',marginLeft: 20}} target="_blank" href={'mailto:pars.pariz@gmail.com'}>pars.pariz@gmail.com</a>
                            </div>
                            <div>
                                <img src={insta} alt="" style={{width: 30,  marginBottom:4}}/>
                                <a style={{display:'inline-block',marginLeft: 20}} target="_blank" href={'https://www.instagram.com'}>instagram</a>
                            </div>
                            <div>
                                <img src={map} alt="" style={{width: 30,  marginBottom:4}}/>
                                <a style={{display:'inline-block',marginLeft: 20}} target="_blank" href={'http://maps.google.com/?q=35.702104,51.403790'}>google map</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-md-6 col-12 text-light pt-4 pb-4 pb-2 d-flex align-items-center" style={{backgroundColor: 'rgb(107,107,107)', textAlign: 'justify'}}>
                        In a professional context it often happens that private or corporate clients corder a
                        publication to be made and presented with the actual content still not being ready. 
                        Think of a news blog that's filled with content hourly on the day of going live. However,
                        reviewers tend to be distracted by comprehensible content, say, a random text copied from a
                        newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. 
                        Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate 
                        reviewers tend to be distracted by comprehensible content, say, a random text copied from a
                        newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. 
                        Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate 
                        reviewers tend to be distracted by comprehensible content, say, a random text copied from a
                        newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. 
                        Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate 
                        environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely
                        since the sixteenth century.
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;