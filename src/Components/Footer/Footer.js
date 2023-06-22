import React from "react";
import "./Footer.css";
import {FaInstagram,FaFacebook,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer_contact_us">
        <h2>Contact us</h2>
        <p className="footer_contact_us_address">
          RPF COLONY,Malgoodam,UttarPradesh,India
        </p>
        <p className="footer_contact_us_number">+91 6888279225</p>
        <p className="footer_contact_us_number">+91 6888219225</p>
      </div>
      <div className="footer_social_media">
        <h2>Krishna Restaurent</h2>
        <p>hare krishna hare krishna krishna krishna hare hare hare rama hare ram rama rama hare hare </p>
        <div className="footer_social_media_icons">
<FaInstagram className="footer_social_media_icons_icon"/>
<FaFacebook className="footer_social_media_icons_icon"/>
<FaTwitter className="footer_social_media_icons_icon"/>
        </div>
      </div>
      <div className="footer_working_hour">
        <h2>Working Hours</h2>
        <p>
          Monday-Friday: <br />
          08:00 am -12:00 am <br /> <br />
          Saturday-Sunday: <br />
          07:00am -11:00 pm <br />
        </p>
      </div>
    </div>
  );
};

export default Footer;
