import React from "react";
import "./footer.scss";
import { Instagram } from "../../asssets/icon";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.instagram.com/rcfuniosunosogbo/"
        className="up__footer"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram /> <p>Follow us on IG</p>
      </a>
      <a href="mailto:it.eniolaademola@gmail.com"><p>Contact Developer</p></a>
    </footer>
  );
};
export default Footer;
