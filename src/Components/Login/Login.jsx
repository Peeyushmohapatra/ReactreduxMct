import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = ({ showPage, setShowPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [homePath, setHomePath] = useState("/home");
  const [loginPath, setLoginPath] = useState("/login");

  const checkDetails = () => {
    let symbol1 = 0;
    let symbol2 = 0;
    if (email === "" || password === "") {
      // setPath("/");

      return false;
    }
    console.log(email, password);
    for (let i = 0; i < email.length; i++) {
      let ch = email.charAt(i);
      console.log(ch, "Email");
      if (ch === ".") {
        symbol1++;
      } else if (ch === "@") {
        symbol2++;
      }
    }
    if (symbol1 !== 1 || symbol2 !== 1) {
      console.log(symbol1, symbol2);
      // setPath("/");
      return false;
    }

    return true;
  };
  return (
    <div className="loginMainContainer">
      <div className="leftLoginContainer">
        <div>
          <h1>Welcome back to</h1>
          <h1>Preety Login</h1>
        </div>

        <p>Its great to have you back.</p>

        <div className="inputContainer">
          <label>Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
        </div>

        <div className="inputContainer">
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
        </div>

        <div className="rememberMeContainer">
          <div className="rememberMe">
            <input id="checkbox" type="checkbox" />
            <p>Remember me?</p>
          </div>
          <div className="forgotPassword">
            <p>Forgot password?</p>
          </div>
        </div>

        <div className="buttonContainer">
          <Link
            onClick={() => {
              if (checkDetails()) {
                // setPath("/home");
                setShowPage(true);
                // return;
                // console.log(path);
              } else {
                setShowPage(false);
                // setPath("/");
                alert("Go Back");
                return;
              }
            }}
            to={checkDetails() ? homePath : loginPath}
          >
            <button id="login">LOGIN</button>
          </Link>
          <button id="createAccount">CREATE ACCOUNT</button>
        </div>
        <div className="bottonContainer">
          <p>Or login with</p>
          <p id="pTag">Facebook Google</p>
        </div>
      </div>
      <div className="rightLoginContainer">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/988/694/desktop-wallpaper-nature-landscapes-trees-orchard-fields-grass-fog-mist-tree-fog-landscape.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
