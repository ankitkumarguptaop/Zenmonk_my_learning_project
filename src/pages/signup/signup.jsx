import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import handwave from "../../images/handwave.png";
import flower from "../../images/art.png";
import { useState } from "react";
import Input from "../../components/input/input.jsx";
import Thirdpartysignin from "../../components/third-party-logo-button/third-party-logo-button.jsx";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [input,setInput]=useState({
  //   email:"",
  //   password:""
  // })
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  function handleName(e) {
    setName(e.target.value);
    if (name.replace(/\s+/g, " ").trim().length < 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (e.target.value.length <= 0) {
      setNameError(false);
    }

  }

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

  function handlePassword(e) {
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

    if(!emailPattern.test(email)){
      alert("please enter valid email ");
      setEmailError(true);
     }
     if(name.replace(/\s+/g, " ").trim().length <= 0){
      alert("please enter valid name ");
      setNameError(true);
     }
     if(!passwordPattern.test(password) ){
      alert("please enter valid password ");
      setPasswordError(true);
     }
     if(passwordPattern.test(password) && name.replace(/\s+/g, " ").trim().length > 0 && emailPattern.test(email)){
      alert("User Successfuly Signup!");
      setEmailError(false);
      setPasswordError(false);
      setNameError(false);
      navigate("/");
      setEmail("");
      setPassword("");
      setName("");
     }

  }

  return (
    <div className="container">
      <div className="left-section">
        <div className="text">
          <h1>Welcome</h1> <img src={handwave} alt="" />
          <div>
            <span className="inside-text">
              Today is a new day. it's your day. You Shape it
            </span>
            <span>Sign in to start managing your projects.</span>
          </div>
        </div>
        <form action="" id="" name="">
          <div className="sign-up-info">
            <div className="whole-name-rapper">
              <label htmlFor="name">Name</label>
              <div className="name" id="name">
                <Input
                  type="text"
                  value={name}
                  placeHolder="Please enter your name"
                  handleInput={handleName}
                  error={nameError}
                  errorMessage="Please Enter Valid Name ❌"
                  required={true}
                />
              </div>
            </div>

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
              <label htmlFor="email">Password</label>
              <div className="password" id="password">
                <Input
                  type="password"
                  value={password}
                  placeHolder="At least 8 Characters"
                  handleInput={handlePassword}
                  error={passwordError}
                  errorMessage="Password must greater than 8 and include all type of Leters ❌"
                  required={true}
                />
                <div className="forgot-link"></div>
              </div>
            </div>
            <button className="btn" onClick={(e) => handleLogin(e)}>
              Sign up
            </button>
            <div className="or-section"></div>
            <Thirdpartysignin type="Google" image={google} sign="Sign up" />
            <Thirdpartysignin type="Facebook" image={facebook} sign="Sign up" />
            <div className="sign-up-option">
              <span>
                Don't you have an account? <a href="./"> Sign in</a>
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

export default SignUp;
