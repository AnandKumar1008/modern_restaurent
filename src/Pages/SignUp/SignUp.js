import React, { useState } from "react";
import "./SignUp.css";
import { Nav } from "../../Components";
const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [error, setError] = useState({
    usernameError: " ",
    passwordError: " ",
    confirmPasswordError: " ",
    emailError: " ",
  });
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    setError({...error,[e.target.name+"Error"]:""})
  };
  const handleSubmit = () => {};

  const handleBlur = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const length = e.target.value.length;
    if(length==0) return ;
    if (e.target.name === "username") {
      const pattern = /^[a-zA-Z0-9_-]+$/;
      if (length >= 1 && length <= 2) {
        setError({ ...error, usernameError: "Content is Too sort" });
        return;
      } else if (pattern.test(e.target.value)) {
        setError({ ...error, usernameError: "" });
      } else {
        setError({
          ...error,
          usernameError:
            "The username must contain only letters, numbers, hyphens and underscores.",
        });
      }
    }
    if(e.target.name==='password'){
        const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(!pattern.test(e.target.value)){
            setError({...error,passwordError:"Must be 8 characters or more, needs at least one number and one letter"});
        }
    }
    if(e.target.name==='confirmPassword'){
        if(e.target.value!=userDetails.password){
            setError({...error,confirmPasswordError:"Please enter password again"});
        }
    }
    if(e.target.name==='email'){
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!pattern.test(e.target.value)){
            setError({...error,emailError:"Invalid Error"});
        }
    }
  };
  return (
    <>
    <Nav/>
    <div className="sign_up section__padding">
      <div className="sign_up_form">
        <form action="" onSubmit={handleSubmit} >
          <h1>
            {" "}
            <span>K</span>rishna Restaurent
          </h1>
          <input
            type="text"
            name="username"
            placeholder="UserName"
            value={userDetails.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className=""
          />
           <p>{error.usernameError}</p>
          <input
            type="password"
            name="password"
            value={userDetails.password}
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            />
           <p>{error.passwordError}</p>

          <input
            type="password"
            name="confirmPassword"
            value={userDetails.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p>{error.confirmPasswordError}</p>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           <p>{error.emailError}</p>

          <button>Sign Up</button>
          <p>
            Have an account?<span className="sign_up_form_sign_in"> Sign In</span>
          </p>
        </form>
      </div>
    </div>
            </>
  );
};

export default SignUp;
