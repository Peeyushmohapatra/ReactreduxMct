import React, { useContext } from "react";
import { Global } from "../../App";
import Navbar from "../Navbar/Navbar";
import "./productDetails.css";

const ProductDetails = () => {
  const obj = useContext(Global);
  // console.log(data);
  // console.log(obj.rightData[0], "listData");

  return (
    <>
      <Navbar />
      <div className="productDetails">
        <div className="detailsContainer">
          <div className="header">
            <h2>{obj.target} Category</h2>
          </div>
          <div className="detailsContainerr">
            <div className="imgContainer">
              {obj.rightData &&
                obj.rightData.map((ele) => {
                  if (ele.title === obj.item) {
                    return (
                      <>
                        <img id="image" src={ele.image} alt="" />
                      </>
                    );
                  }
                })}
            </div>
            <div className="imgDetailsContainer">
              {obj.rightData &&
                obj.rightData.map((ele) => {
                  if (ele.title === obj.item) {
                    return (
                      <>
                        <div className="random">
                          <label>Product Name</label>
                          <p>{ele.title}</p>
                        </div>
                        <div className="random">
                          <label>Product Price</label>
                          <p>₹ {(ele.price * 82.54).toFixed(2)}</p>
                        </div>
                        <div className="random">
                          <label>Product Description</label>
                          <p>{ele.description}</p>
                        </div>
                        <div className="random">
                          <label>Product Rating</label>
                          <p>{ele.rating.rate}</p>
                        </div>
                      </>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
