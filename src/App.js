// node libraries
import React from 'react';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/hamberMenu.css";
import "./assets/css/slider.css";
import "./assets/css/header.css";
import "./assets/css/proccess.css";
import "./assets/css/business.css";
// router
import Router from "./containers/router";

function App() {
  return (
    <div className="App">
       <Router />
    </div>
  );
}

export default App;
