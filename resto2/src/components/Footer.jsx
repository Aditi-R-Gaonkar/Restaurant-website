import React from "react";
import { GrInstagram } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GrInstagram /> <SiFacebook /> <FaSquareXTwitter /> <IoLogoWhatsapp />
      </div>
      <p> &copy; 2024 RestroHub.com</p>
    </div>
  );
}

export default Footer;
