import React from "react";
import "./chef.css";
import chefImg from '../Images/chef.png'
import sign from '../Images/sign.png'

const Chef = () => {
  return (
    <div className="chef">
      <div className="chef_img">
        <img src={chefImg} alt="" />
      </div>
      <div className="chef_words">
        <h2 >chef's word</h2>
        <h1>What we believe in </h1>
        <div>
          <p>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          fugiat omnis accusamus laborum, hic, rem ipsum enim dignissimos rerum
          explicabo eos! Ipsam quia laudantium provident vitae, ducimus dolores
          soluta.
          </p>
        </div>
        <h2>Madhav ram</h2>
        <p>chef and founder</p>
        <img src={sign} alt="" />
      </div>
    </div>
  );
};

export default Chef;
