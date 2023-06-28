import React, { useState } from "react";
import mocktail from "../Images/mocktail.webp";
import desert from "../Images/desert.webp";
import maincourse from "../Images/maincourse.jpg";
import "./Services.css";
const change = {
  desert: 0,
  mocktail: 0,
  maincourse: 0,
};
const Services = () => {
  const [img, setImg] = useState(maincourse);
  const [opacity, setOpacity] = useState({
    maincourse: 1,
    mocktail: 0,
    desert: 0,
  });
  // const handleEnter = () => {
  //   setImg();
  // };
  console.log(img);
  return (
    <>
      <div className="modern_restaurent-services_heading">
        <h3>Serving Quality</h3>
        <h1>We at Krishna Are Serving Our Customers For Over A Decade</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          iste eligendi numquam minus nam, praesentium rem repudiandae, ipsa
          velit rerum porro temporibus ipsum consequatur.
        </p>
        <div className="modern_restaurent-services_heading_button">
          <button>Read More</button>
          <button>Contact us</button>
        </div>
      </div>
      <div
        className="modern_restaurent-services"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div
          className="modern-restaurent_services_recipes"
          // onMouseLeave={setOpacity({ change, maincourse: 1 })}
        >
          <div
            className="modern_restaurent-services_item maincourse"
            onMouseOver={() => {
              setOpacity({ change, maincourse: 1 });
              setImg(maincourse);
            }}
          >
            <img
              src={maincourse}
              alt=""
              style={{ opacity: opacity.maincourse }}
            />
            <div className="text_changing">
              <h3>Main Course</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, perferendis.
              </p>
            </div>
          </div>
          <hr />
          <div
            className="modern_restaurent-services_item mocktail"
            onMouseOver={() => {
              setOpacity({ change, mocktail: 1 });
              setImg(mocktail);
            }}
          >
            <img src={mocktail} alt="" style={{ opacity: opacity.mocktail }} />
            <div className="text_changing">
              <h3>Mocktail</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
                deleniti.
              </p>
            </div>
          </div>
          <div
            className="modern_restaurent-services_item desert"
            onMouseOver={() => {
              setOpacity({ change, desert: 1 });
              setImg(desert);
            }}
          >
            <img src={desert} alt="" style={{ opacity: opacity.desert }} />
            <div className="text_changing">
              <h3>Dessert</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores, quo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
