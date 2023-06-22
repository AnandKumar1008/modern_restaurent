import React from "react";
import "./Customer.css";
import c1 from "../Images/customer1.jpg";
import c2 from "../Images/customer2.jpg";
import c3 from "../Images/customer3.jpg";
import c4 from "../Images/customer4.jpg";
const Customer = () => {
  return (
    <div className="customer section__padding">
      <h3>Testimony</h3>
      <h1>Happy Customers</h1>
      <div className="customer_customers_image">
        <div className="customer_customer">
          <img src={c1} alt="" />
          <div className="customer_customer_comment">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quod amet nostrum laboriosam ipsam in similique suscipit eius
              omnis rem.
            </p>
            <h2>Rama</h2>
          </div>
        </div>
        <div className="customer_customer">
          <img src={c2} alt="" />
          <div className="customer_customer_comment">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quod amet nostrum laboriosam ipsam in similique suscipit eius
              omnis rem.
            </p>
            <h2>PriyaHari</h2>
          </div>
        </div>
        <div className="customer_customer">
          <img src={c3} alt="" />
          <div className="customer_customer_comment">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quod amet nostrum laboriosam ipsam in similique suscipit eius
              omnis rem.
            </p>
            <h2>laxmiGauri</h2>
          </div>
        </div>
        <div className="customer_customer">
          <img src={c4} alt="" />
          <div className="customer_customer_comment">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quod amet nostrum laboriosam ipsam in similique suscipit eius
              omnis rem.
            </p>
            <h2>Dau bhaiya</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
