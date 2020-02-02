import React, { Component } from 'react';
import Logo from "../../../assets/images/logos/logo.png";
import insta from "../../../assets/images/social/insta.jpg"
import mail from "../../../assets/images/social/mail.jpg"
import map from "../../../assets/images/social/map.jpg"
import phone from "../../../assets/images/social/phone.png"
import tel from "../../../assets/images/social/tel.png"
import wats from "../../../assets/images/social/wats.png"

const _date = new Date();
class Footer extends Component {
    render() {
        return (
            <div style={{marginTop: 90, paddingBottom:10}}>
                <div id="footer" className="row mt-3" style={{position:"relative", marginBottom:2}}>
                    <div className="col-12 robanHeader" id="MainBusiness">
                        <b className="h4">About & Contact us</b>
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
                                <a  rel="noopener noreferrer" className="footer-link" style={{display:'inline-block',marginLeft: 20, position:"relative", right: 4}} target="_blank" href={'https://wa.me/989303415460'}>+989303415460</a>
                            </div>
                            <div>
                                <img src={tel} alt="" style={{width: 30,  marginBottom:4}}/>
                                <a  rel="noopener noreferrer" className="footer-link" style={{display:'inline-block',marginLeft: 20}} target="_blank" href={'https://t.me/'}>+989303415460</a>
                            </div>
                            <div>
                                <img src={phone} alt="" style={{width: 30,  marginBottom:4}}/>
                                <span className="footer-link" style={{display:'inline-block',marginLeft: 20}}>+982166718440</span>
                            </div>
                            <div>
                                <img src={mail} alt="" style={{width: 30,  marginBottom:4}}/>
                                <a  rel="noopener noreferrer" className="footer-link" style={{display:'inline-block',marginLeft: 20}} target="_blank" href={'mailto:ostouri@info.com'}>ostouri@info.com</a>
                            </div>
                            <div>
                                <img src={insta} alt="" style={{width: 30,  marginBottom:4}}/>
                                <a  rel="noopener noreferrer" className="footer-link" style={{display:'inline-block',marginLeft: 20}} target="_blank" href={'https://www.instagram.com/Ostouri_trading_co'}>instagram</a>
                            </div>
                            <div>
                                <img src={map} alt="" style={{width: 30,  marginBottom:4}}/>
                                <a  rel="noopener noreferrer" className="footer-link" style={{display:'inline-block',marginLeft: 20}} target="_blank" href={'http://maps.google.com/?q=35.699377,51.409901'}>google map</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-md-6 col-12 text-light pt-4 pb-4 pb-2" style={{backgroundColor: 'rgb(107,107,107)', textAlign: 'justify'}}>
                        <div className="mt-4">
                            Ostouri Trading co is a family owned business founded in 1990 by Mr Hossein Ostouri. This company is located in Tehran, Iran. The corporation started it’s business by importing beans, pulses and seeds to Iran and exporting dried fruits from Iran to other countries. Having steady and sound relationship with our reliable suppliers motivated this company to extend it’s business activities. 
                            This team has agents in many countries who control the quality and procurement process in order to provide best quality with reasonable price in the fastest time.
                        </div>
                        <div style={{marginTop: 100}}>
                            <b>Address : Ostouri Co, 3th floor, No.22 khark street, enghelab street,  Tehran, IRAN </b>
                        </div>

                    </div>
                </div>
                <div className="text-center">
                    Copyright &copy; {_date.getFullYear()} Ostouri Co. All rights reserved
                </div>
            </div>
        );
    }
}

export default Footer;