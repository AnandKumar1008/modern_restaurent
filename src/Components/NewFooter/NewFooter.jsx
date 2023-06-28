import React from "react";
import "./NewFooter.css";
const NewFooter = () => {
  return (
    <div className="modern_restaurent-footer ">
      <h1>Radhe krishna</h1>
      <div className="modern_restaurent-footer_section">
        <section className="modern_restaurent-footer_first">
          <h2>Contact us</h2>
          <h5>Booking</h5>
          <h5>call us:+9132523523</h5>
          <h5>Location</h5>
          <p>Vaikunth Out side Earth,Vishnu</p>
        </section>
        <section className="modern_restaurent-footer_middle">
          <h2>Stay Connected</h2>
          <p>
            Subscribe & get 10% discount. Get E-mail updates about our latest
            shop and special offers.
          </p>
          <button>
            <input type="text" placeholder="Your Email Address" />{" "}
            <span>Subscribe</span>
          </button>
          <p>For Any Question/Query Email: gerichthelp@gmail.com</p>
        </section>
        <section className="modern_restaurent-footer_last">
          <h2>Opening Time</h2>
          {/* <div className="modern_restaurent-footer_last_time"> */}
          <div className="modern_restaurent-footer_last_time">
            <div className="modern_restaurent-footer_last_lunch_time">
              <h3>Lunch Time</h3>
              <p>Monday-Friday</p>
              <p>08:00 am -12:00 am</p>
            </div>
            <div className="modern_restaurent-footer_last_time_middle"></div>
            {/* <hr /> */}
            <div className="modern_restaurent-footer_last_dinner_time">
              <h3>Dinner Time</h3>
              <p>saturday-Sunday</p>
              <p>07:00am -11:00 pm</p>
            </div>
          </div>
          {/* </div> */}
        </section>
      </div>
      <div className="modern_restaurent-footer_copyright">
        {/* <hr /> */}
        <p>© gericht - 2023 all rights reserved by iqonic design</p>
      </div>
    </div>
  );
};

export default NewFooter;
