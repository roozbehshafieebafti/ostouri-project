import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// containres
import Home from "../home";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/"  render={()=> <Home />} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;