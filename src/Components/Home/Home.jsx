import React from "react";
import Navbar from "../Navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Welcome to React</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          reiciendis consectetur, quis odio tenetur sit quam aut velit mollitia
          deserunt aspernatur libero, error at maiores odit, optio alias.
          Eligendi, delectus? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quia, et odit, dolorem sed expedita iure voluptatum
          recusandae asperiores illum sapiente eum, repellat necessitatibus
          commodi a omnis nemo accusantium ab eligendi?
        </p>

        <button>Explore More !!!</button>
      </div>
    </>
  );
};

export default Home;
