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
                        search
                    </div>
                </div>
                <div style={{backgroundColor: "red", position: "absolute", left: 0, right: 0}}>
                    hello boy
                </div>
            </div>
        );
    }
}

export default Header;