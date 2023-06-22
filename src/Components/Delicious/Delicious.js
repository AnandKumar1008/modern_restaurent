import React from "react";
import img1 from '../Images/items1.jpeg'
import img2 from '../Images/items2.jpeg'
import img3 from '../Images/items3.jpeg'
import './Delicious.css'
const images=[{src:img1,text:"BreakFast"},{src:img2,text:"Seafood"},{src:img3,text:"Starter"}];
const Delicious = () => {
  return (
    <div className="restaurent-delicious section__padding">
      <div className="restaurent-delicious_heading">
        <p>Delicious Menu</p>
        <hr />
        <h2>Taste The Royal Cuisine</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look believable.
        </p>
      </div>
      <div className="restaurent-delicious_images">
        <div className="restaurent-delicious_image_grid">
          {images.map((image,i)=>(
            <div key={i} className="image-wrapper">
              <img src={image.src} alt="" />
              <div className="text-overlay">
                
                <p>{image.text}</p>
                <p>Discover_More</p>
                 </div>
            </div>
          ))}
            {/* <img src={img1} alt="" />
            
            <img src={img2} alt="" />
            <img src={img3} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Delicious;
