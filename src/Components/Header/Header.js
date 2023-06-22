import React from "react";
import './Header.css'
import image from '../Images/food2.jpg'

export default function Header() {
  return (
    <div className="header_container section__padding">
      <section className="header_container-section">
        <div className="header_container-section_left">
          <h4>Chase the new Flavour</h4>
          <h1 className="heading">The key to <br /> Fine dining</h1>
          <p>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </p>
          <button className="explore">Explore More</button>
        </div>
        <div className="header_container-section_right">
            <img src={image} alt="" />
        </div>
      </section>
    </div>
  );
}
