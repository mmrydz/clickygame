import React from "react";
import "./style.css";

const Nav = props => (
<nav className="navbar" >
  <div className="container-fluid">
    <div className="navbar-header">
      <div className="navbrand">Clicky Cat App</div>
    </div>
    <ul className="navbar-right">
      <li><span className="fas fa-sd-card"></span> Current Score: {props.score}</li>
      <li><span className="fas fa-sd-card"></span> Current Score: {props.rightWrong}</li>
      <li> | </li>
      <li><span className="fas fa-trophy"></span> Top Score: {props.topScore}</li>
    </ul>
  </div>
</nav>
);

export default Nav;