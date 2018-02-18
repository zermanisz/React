import React from "react";
const Logo = props => (
  <p>
    <img
      className="about"
      src="http://www.docplanner-platform.com/img/general/about-us/img/sygnet.png"
    />
    <h1> {props.title}</h1>
  </p>
);
export default Logo;
