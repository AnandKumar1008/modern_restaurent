import React from "react";
import img from "../Images/menu.png";
import "./TodaySpecial.css";


const TodaySpecial = () => {
  return (
    <>
    <div className="today_special section__padding">
      <div className="today_special-wine_beer">
        <div className="today_special-wine_beer_items">
          <h2>Wine & Beer</h2>
          <table>
            <tr>
              {" "}
              <td>Chaped Hill Shiraz  </td> <div></div> <td>$56</td>{" "}
            </tr>
            <tr>

            <td >AU | Bottle</td>
            </tr>
            <tr>
              {" "}
              <td> Catena Malbec</td> <div></div> <td>$59</td>{" "}
            </tr>
            <tr>

            <td>AR | Bottle</td>
            </tr>
            <tr>
              {" "}
              <td>La Vieille Rosé</td> <div></div> <td>$44</td>{" "}
            </tr>
            <tr>

            <td>FR | 750 ml</td>
            </tr>
            <tr>
              {" "}
              <td>Rhino Pale Ale</td> <div></div> <td>$31</td>{" "}
            </tr>
            <tr>

            <td>CA | 750 ml</td>
            </tr>
            <tr>
              {" "}
              <td>Irish Guinness</td> <div></div>
              <td>$26</td>{" "}
            </tr>
            <tr>

            <td>IE | 750 ml</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="today_special-img">
        <img src={img} alt="" />
        <button>View More</button>
      </div>
      <div className="today_special-cocktails">
        <div className="today_special-cocktails_items">
          <h2>Cocktails</h2>
          <table>
            <tr>
              {" "}
              <td>Aperol Spritz</td> <div></div> <td>$56</td>{" "}
            </tr>
            <tr>

            <td colSpan={3}>Aperol | Villa Marchesi prosecco | soda | 30ml</td>
            </tr>
            <tr>
              {" "}
              <td> Dark 'N' Stormy</td> <div></div> <td>$59</td>{" "}
            </tr>
            <tr>

            <td colSpan={3}>Aperol | Villa Marchesi prosecco | soda | 30ml</td>
            </tr>
            <tr>
              {" "}
              <td>Daiquiri</td> <div></div> <td>$44</td>{" "}
            </tr>
            <tr>

            <td colSpan={3}>Rum | Citrus juice | Sugar</td>
            </tr>
            <tr>
              {" "}
              <td>Old Fashioned</td> <div></div> <td>$31</td>{" "}
            </tr>
            <tr>

            <td colSpan={3}>Bourbon | Brown sugar | Angostura Bitters</td>
            </tr>
            <tr>
              {" "}
              <td>Negroni</td> <div></div>
              <td>$26</td>{" "}
            </tr>
            <tr>

            <td colSpan={3}>Gin | Sweet Vermouth | Campari | Orange garnish</td>
            </tr>
          </table>
        </div>
      </div>
      
     
      
    </div>
    
    
    </>

  );
};

export default TodaySpecial;
