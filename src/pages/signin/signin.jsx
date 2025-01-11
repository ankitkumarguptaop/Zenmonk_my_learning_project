import React from "react";
import "./signin.css";
import handwave from "../../images/handwave.png";
import flower from "../../images/art.png";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import { useState } from "react";
import Input from "../../components/input/input";
import Thirdpartysignin from "../../components/third-party-logo-button/third-party-logo-button";
import { useNavigate } from "react-router-dom";

function Sigin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (e.target.value.length <= 0) {
      setEmailError(false);
    }
  }

  function handleSignin(e) {
    setPassword(e.target.value);
    var passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (e.target.value.length <= 0) {
      setPasswordError(false);
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

 
    //  if(!emailPattern.test(email)){
    //     alert("Please enter correct email");
    //   }
    //  if (!passwordPattern.test(password)) {
    //   alert("Please enter correct password");
    //  }
     if(passwordPattern.test(password) && emailPattern.test(email)){
      console.log("User Email id is :", email);
      console.log("User Password is :", password);
      alert(" User successfuly Sign in !");
      navigate("/home", { state: [email, password] });
      setEmailError(false);
      setPasswordError(false);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="signin-container">
      <div className="left-section">
        <div className="text">
          <h1>Welcome Back</h1> <img src={handwave} alt="" />
          <div>
            <span className="inside-text">
              Today is a new day. it's your day. You Shape it
            </span>
            <span>Login to start managing your projects.</span>
          </div>
        </div>
        <form action="">
          <div className="login-info">
            <div className="whole-email-rapper">
              <label htmlFor="email">Email</label>
              <div className="email" id="email">
                <Input
                  type="email"
                  value={email}
                  placeHolder="example@gmail.com"
                  handleInput={handleEmail}
                  error={emailError}
                  errorMessage="Please enter the valid Email ❌"
                  required={true}
                />
              </div>
            </div>
            <div className="whole-password-rapper">
              <label htmlFor="email">Password </label>
              <div className="password" id="password">
                <Input
                  type="password"
                  value={password}
                  placeHolder="At least 8 Characters"
                  handleInput={handleSignin}
                  error={passwordError}
                  errorMessage="Password must greater than 8 and include all type of Leters ❌"
                  required={true}
                />
                <div className="forgot-link">
                  <a href="./">Forgot Password?</a>
                </div>
              </div>
            </div>
            <button
              className="btn"
              type="submit"
              onClick={(e) => handleLogin(e)}
            >
              Sign in
            </button>
            <div className="or-section"></div>
            <Thirdpartysignin type="Google" image={google} sign="Sign in" />
            <Thirdpartysignin type="Facebook" image={facebook} sign="Sign in" />
            <div className="sign-up-option">
              <span>
                Don't you have an account? <a href="./signup"> Sign up</a>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="right-section">
        <div className="image">
          <img src={flower} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sigin;
