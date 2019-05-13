import React from "react";
import "./style.css";

const Nav = props => (
<nav className="navbar" >
  <div className="container-fluid">
    <div className="navbar-header">
      <div className="navbrand">Clicky Cat App</div>
    </div>
    <ul className="navbar-right">
    <li><h2 className="doh">{props.rightWrong}</h2></li>
      <li><span className="fas fa-sd-card"></span> Current Score: {props.score}</li>
      <li> | </li>
      <li><span className="fas fa-trophy"></span> Top Score: {props.topScore}</li>
    </ul>
  </div>
  <hr></hr>
</nav>
);

export default Nav;

