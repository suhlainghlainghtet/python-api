import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright @2023</p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Footer;
