import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Global } from "../../App";
import Navbar from "../Navbar/Navbar";
import "./user.css";

const Users = () => {
  const obj = useContext(Global);
  const [gender, setGender] = useState("all");
  const [initial, seInitial] = useState(false);
  const apiData = useSelector((state) => {
    return state;
  });
  console.log(apiData.myData.results, "From user");


  return (
    <div className="userContainer">
      <Navbar />
      <div className="bigRadioContainer">
        <div className="radioBtn">
          <input
            onClick={(e) => {
              setGender(e.target.value);
              seInitial(true);
              // console.log(obj.userData.results);
            }}
            type="radio"
            value="all"
            name="gender"
          />
          <label>All</label>
        </div>
        <div className="radioBtn">
          <input
            onClick={(e) => {
              setGender(e.target.value);
              seInitial(true);
              // console.log(obj.userData.results);
            }}
            type="radio"
            value="male"
            name="gender"
          />
          <label>Male</label>
        </div>
        <div className="radioBtn">
          <input
            onClick={(e) => {
              setGender(e.target.value);
              seInitial(true);

              // console.log(obj.userData.results);
            }}
            type="radio"
            value="female"
            name="gender"
          />
          <label>Female</label>
        </div>
      </div>
      <div className="userHeader">
        <div className="leftUser">
          <h4>Image</h4>
          <h4>Name</h4>
        </div>
        <div className="rightUser">
          <h4>Email</h4>
          <h4>Gender</h4>
        </div>
      </div>
      <div className="userInnerContainer">
        {initial &&
          apiData.myData.results.map((ele) => {
            if (ele.gender === gender) {
              console.log(ele);
              return (
                <>
                  <div className="genderDataContainer">
                    <div className="leftUserGender">
                      <img src={ele.picture.medium} alt="Hello" />
                      <h4>{ele.name.first}</h4>
                    </div>
                    <div className="rightUserGender">
                      <h4>{ele.email}</h4>
                      <h4>{ele.gender}</h4>
                    </div>
                  </div>
                </>
              );
            } else if (gender === "all") {
              return (
                <>
                  <div className="genderDataContainer">
                    <div className="leftUserGender">
                      <img src={ele.picture.medium} alt="Hello" />
                      <h4>{ele.name.first}</h4>
                    </div>
                    <div className="rightUserGender">
                      <h4>{ele.email}</h4>
                      <h4>{ele.gender}</h4>
                    </div>
                  </div>
                </>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Users;
