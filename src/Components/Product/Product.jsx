import React, { useContext, useState } from "react";
import "./product.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Global } from "../../App";

const Product = () => {
  const obj = useContext(Global);
    console.log(obj.leftData);

  return (
    <div className="productMainContainer">
      <Navbar />
      <div className="outerproductContainer">
        <div className="productContainer">
          <div className="leftProduct">
            {obj.leftData &&
              obj.leftData.map((ele) => {
                return (
                  <>
                    <p
                      id="clickP"
                      onClick={(e) => {
                        obj.showData(e.target.innerText);
                        obj.setTarget(e.target.innerText);
                        console.log(obj.target,"Target");
                      }}
                    >
                      {ele}
                    </p>
                  </>
                );
              })}
          </div>
          <div className="rightProduct">
            {obj.rightData &&
              obj.rightData.map((ele) => {
                return (
                  <ul>
                    <Link className="linkk" to="/productDetails">
                      <li
                        onClick={(e) => {
                          obj.setListData(e.target.innerText);
                          obj.setItem(ele.title);

                          // console.log(obj.listData,"listData");
                        }}
                        id="li"
                      >
                        {ele.title}
                      </li>
                    </Link>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
