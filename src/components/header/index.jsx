// node libraries
import React, { Component } from 'react';
import LOGO from "../../assets/images/logos/logo3.jpg";
import LOGO_Tow from "../../assets/images/logos/logo5.png";
import {FaSistrix} from "react-icons/fa"


class Header extends Component {
    scrroling=(e,id)=>{
        e.preventDefault();
        let element = document.getElementById(id)
        element.scrollIntoView({
            behavior: 'smooth', block: 'center'
        });
    }
    render() {
        return (
            <div>
                <div className="main-header">
                    <div className="logo-container">
                        <img src={LOGO} alt="ostouri" className="left-logo"/>
                    </div>
                    <div className="serach-container">
                        <input className="search-input" type="text" placeholder="Search"/>
                        <button className="search-button"><FaSistrix style={{position: "relative", bottom: 3}} /></button>
                    </div>
                </div>
                <div className="red-roban">
                    <div className="header-nav-bar">
                        <a className="links" style={{textDecoration: 'none'}} href="#Home">Home</a>
                        <a className="links" style={{textDecoration: 'none'}} href="#MainBusiness" onClick={(e)=>this.scrroling(e,'_mainBusiness')} >Main business</a>
                        <a className="links" style={{textDecoration: 'none'}} href="#News" onClick={(e)=>this.scrroling(e,'news')}>News</a>
                        <a className="links" style={{textDecoration: 'none'}} href="#About" onClick={(e)=>this.scrroling(e,'footer')}>About & Contact us</a>
                    </div>
                    <div>
                        <img src={LOGO_Tow} alt="ostouri" className="right-logo"/>                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;