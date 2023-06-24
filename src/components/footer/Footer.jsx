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
        <Instagram /> Follow us on IG
      </a>
      <a href="mailto:it.eniolaademola@gmail.com">Contact Developer</a>
    </footer>
  );
};
export default Footer;
