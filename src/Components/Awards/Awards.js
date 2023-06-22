import React from "react";
import "./Awards.css";
import img1 from "../Images/laurels.png";
import award1 from "../Images/award01.png";
import award2 from "../Images/award02.png";
import award3 from "../Images/award03.png";
import award4 from "../Images/award05.png";

const Awards = () => {
  return (
    <div className="awards section__padding">
      <div className="awards_left_half">
        <h2>Awards & Recognition</h2>
        <h1>Our Laurels</h1>
        <div className="awards_left_half-awards">
          <div className="awards_left_half_awards_award">
            <img src={award1} alt="" />
            <div>
              <h3>Bib Gourmond</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="awards_left_half_awards_award">
            <img src={award2} alt="" />
            <div>
              <h3>Bib Gourmond</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>{" "}
          <div className="awards_left_half_awards_award">
            <img src={award3} alt="" />
            <div>
              <h3>Bib Gourmond</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>{" "}
          <div className="awards_left_half_awards_award">
            <img src={award4} alt="" />
            <div>
              <h3>Bib Gourmond</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="awards_right_half">
        <div className="awards_right_half_image">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
