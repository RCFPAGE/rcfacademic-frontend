import React from "react";
import "./navbar.scss";
import Logo from "../../asssets/images/logoNoBg.png";
const Navbar = () => {
  return (
    <nav className="nav">
      <img src={Logo} alt="rcfLogo" className="logo" />
      <h3>RCF Academic</h3>
    </nav>
  );
};

export default Navbar;
