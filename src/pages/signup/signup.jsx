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
  // dont use this
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });

  // const [emailError, setEmailError] = useState(false);
  // const [nameError, setNameError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
    nameError: false,
  });

  const navigate = useNavigate();

  function handleName(e) {
    // setName(e.target.value);
    setInput({
      email: input.email,
      name: e.target.value,
      password: input.password,
    });
    if (input.name.replace(/\s+/g, " ").trim().length < 0) {
      setError({
        emailError: error.emailError,
        passwordError: error.passwordError,
        nameError: true,
      });
    } else {
      setError({
        emailError: error.emailError,
        passwordError: error.passwordError,
        nameError: false,
      });
    }
    if (e.target.value.length <= 0) {
      setError({
        emailError: error.emailError,
        passwordError: error.passwordError,
        nameError: false,
      });
    }
  }

  function handleEmail(e) {
    setInput({
      email: e.target.value,
      name: input.name,
      password: input.password,
    });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(input.email)) {
      setError({
        emailError: true,
        passwordError: error.passwordError,
        nameError: error.nameError,
      });
    } else {
      setError({
        emailError: false,
        passwordError: error.passwordError,
        nameError: error.nameError,
      });
    }
    if (e.target.value.length <= 0) {
      setError({
        emailError: false,
        passwordError: error.passwordError,
        nameError: error.nameError,
      });
    }
  }

  function handlePassword(e) {
    setInput({
      email: input.email,
      name: input.name,
      password: e.target.value,
    });
    var passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/;
    if (!passwordPattern.test(input.password)) {
      setError({
        emailError: error.emailError,
        passwordError: true,
        nameError: error.nameError,
      });
    } else {
      setError({
        emailError: error.emailError,
        passwordError: false,
        nameError: error.nameError,
      });
    }
    if (e.target.value.length <= 0) {
      setError({
        emailError: error.emailError,
        passwordError: false,
        nameError: error.nameError,
      });
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/;

    if (!emailPattern.test(input.email)) {
      alert("please enter valid entry ");
      setError({
        emailError: true,
        passwordError: error.passwordError,
        nameError: error.nameError,
      });
    }
    if (input.name.replace(/\s+/g, " ").trim().length <= 0) {
      alert("please enter valid entry ");
      setError({
        emailError: error.emailError,
        passwordError: error.passwordError,
        nameError: true,
      });
    }
    if (!passwordPattern.test(input.password)) {
      alert("please enter valid entry ");
      setError({
        emailError: error.emailError,
        passwordError: true,
        nameError: error.nameError,
      });
    }
    if (
      passwordPattern.test(input.password) &&
      input.name.replace(/\s+/g, " ").trim().length > 0 &&
      emailPattern.test(input.email)
    ) {
      alert("User Successfuly Signup!");
      setError({
        emailError: false,
        passwordError: false,
        nameError: false,
      });

      localStorage.setItem(
        input.email,
        JSON.stringify({
          email: input.email,
          password: input.password,
          name: input.name,
          // todos:[]
        })
      );

      localStorage.setItem(
        `${input.email}-todo`,
        JSON.stringify({
          todos: [],
        })
      );
      navigate("/");
      setInput({
        email: "",
        password: "",
        name: "",
      });
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
                  value={input.name}
                  placeHolder="Please enter your name"
                  handleInput={handleName}
                  error={error.nameError}
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
                  value={input.email}
                  placeHolder="example@gmail.com"
                  handleInput={handleEmail}
                  error={error.emailError}
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
                  value={input.password}
                  placeHolder="At least 8 Characters"
                  handleInput={handlePassword}
                  error={error.passwordError}
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
