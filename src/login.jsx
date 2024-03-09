import React, { useState, useRef, useEffect } from "react";
import "../src/login.css";
const Login = () => {
  // let [data,setdate]=useState("Prince")
  let data = useRef();
  console.log(data.current);

  // useEffect(() => {
  //   data.current.focus();
  //   data.current.value = "";
  // });
  let foc = () => {
    data.current.focus();
  };
  return (
    <div>
      <form action="/login">
        <h2>Login</h2>
        <label htmlFor="email">Username:</label>
        <input type="text" id="email" name="email" ref={data} />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <input type="submit" value="Login" onClick={foc} />
      </form>
    </div>
  );
};

export default Login;
