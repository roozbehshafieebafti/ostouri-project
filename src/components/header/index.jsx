// node libraries
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="main-header">
                    <div className="logo-container">
                        logo
                    </div>
                    <div className="serach-container">
                        <input className="search-input" type="text" placeholder="Search"/>
                        <button className="search-button">!!</button>
                    </div>
                </div>
                <div className="red-roban">
                    <div>
                        <a className="links" href="#">Home</a>
                        <a className="links" href="#MainBusiness">Main business</a>
                        <a className="links" href="#">News</a>
                        <a className="links" href="#">About & Contact us</a>
                    </div>
                    <div>logo</div>
                </div>
            </div>
        );
    }
}

export default Header;