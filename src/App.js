import { createContext, useState, useEffect } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Users from "./Components/User/Users";
import Contact from "./Components/ContactUs/Contact";
import ProductDetails from "./Components/Product Details/ProductDetails";
import { useDispatch } from "react-redux";
import { apiData } from "./redux/action";

export const Global = createContext();

function App() {

  const dispatch = useDispatch()
  const [showPage, setShowPage] = useState(false);
  const [leftData, setLeftData] = useState("");
  const [rightData, setRightData] = useState("");
  const [listData, setListData] = useState("");
  const [item, setItem] = useState("");
  const [target, setTarget] = useState("");

  useEffect(() => {
    leftPanel();
    showData();
    userDataFn();
  }, []);

  const leftPanel = async () => {
    const api = await fetch("https://fakestoreapi.com/products/categories");
    const res = await api.text();
    const jsonData = JSON.parse(res);
    setLeftData(jsonData);
    console.log(leftData, jsonData);
  };

  const showData = async (ele) => {
    const api = await fetch(
      `https://fakestoreapi.com/products/category/${ele ? ele : "electronics"}`
    );
    const res = await api.text();
    const jsonData = JSON.parse(res);
    setRightData(jsonData);
  };

  const userDataFn = async () => {
    const api = await fetch(
      `https://randomuser.me/api/?gender=all&results=500`
    );
    const res = await api.text();
    const jsonData = JSON.parse(res);
    console.log(jsonData,"asjdnkjand");
    dispatch(apiData(jsonData))
  };

  const obj = {
    leftData: leftData,
    setLeftData: setLeftData,
    rightData: rightData,
    setRightData: setRightData,
    listData: listData,
    setListData: setListData,
    item: item,
    setItem: setItem,
    showData: showData,
    target: target,
    setTarget: setTarget,
  };

  return (
    <div className="App">
      <Global.Provider value={obj}>
        <Routes>
          <Route
            path="/"
            element={<Login showPage={showPage} setShowPage={setShowPage} />}
          />
          <Route
            path="/login"
            element={<Login showPage={showPage} setShowPage={setShowPage} />}
          />

          {/* {showPage && <Route path="/home" element={<Home />} />} */}
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Global.Provider>
    </div>
  );
}

export default App;
