import React from "react";
import "./Table.css";
const Table = () => {
  return (
    <div className="restaurent-table section__padding">
      <div className="restaurent-table_heading">
        <p>Reservations</p>
        <hr />
        <h2>Book A Table</h2>
      </div>
      <div className="restaurent-table_form">
        <form action="">
          <div className="restaurent-table_input">
            <table>
              <tr>
                <td>
                  <input type="text" placeholder="Your Name" />
                </td>

                <td>
                  <input type="number" placeholder="Your Number" />
                </td>

                <td>
                  <input type="email" placeholder="Your Email" />
                </td>
              </tr>
              <tr>
                <td>
                  <select name="" id="">
                    <option value="1 Person">1 Person</option>
                    <option value="2 Person">2 Person</option>
                    <option value="3 Person">3 Person</option>
                    <option value="4 Person">4 Person</option>
                    <option value="5 Person">5 Person</option>
                    <option value="6 Person">6 Person</option>
                  </select>
                </td>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <select name="" id="">
                    <option value="10 AM">10 AM</option>
                    <option value="11 AM">11 AM</option>
                    <option value="12 AM">12 AM</option>
                    <option value=" 4 PM"> 4 PM</option>
                    <option value=" 5 PM"> 5 PM</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="10"
                    placeholder=" write message"
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div className="restaurent-table_form_select"></div>
          <button className="restaurent-table_form_button">Book Table</button>
        </form>
      </div>
    </div>
  );
};

export default Table;
