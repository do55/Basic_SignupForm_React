import React, { useState } from "react";
import "./Signup.css";

//FETCH

export default function Signup() {
  const [hover, setHover] = useState(false);
  const [style, setStyle] = useState("trial");
  const [buttonStyle, setButtonStyle] = useState("btn");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || lastName === "" || password === "" || email === "") {
      setError(true);
    }
  };

  const onNameChange = (event) => {
    setError(false);
    setName(event.target.value);
  };

  const onLastNameChange = (event) => {
    setError(false);
    setLastName(event.target.value);
  };

  const onEmailChange = (event) => {
    setError(false);
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setError(false);
    setPassword(event.target.value);
  };

  const changeBtnHover = () => {
    setButtonStyle("btnHover");
  };

  const changeBtnInactive = () => {
    setButtonStyle("btn");
  };

  const changeStyle = () => {
    if (hover) {
      setStyle("trialHover");
    } else {
      setStyle("trial");
    }
  };

  const handleMouseIn = () => {
    setHover(true);
    changeStyle();
  };

  const handleMouseOut = () => {
    setHover(false);
    changeStyle();
  };

  return (
    <div className="Signup">
      <input
        type="submit"
        className={style}
        value="Try it free 7 days then $20/mo. thereafter"
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
      />
      <form className="form" action="">
        <input
          id="top"
          type="text"
          className={!error ? "name" : "nameEmpty"}
          placeholder={!error ? "First Name" : ""}
          onChange={onNameChange}
        />
        {error && (
          <span
            style={{
              color: "red",
              fontSize: "12px",
              textAlign: "right",
              paddingRight: "10px",
            }}
          >
            <i>First Name cannot be empty</i>
          </span>
        )}
        <input
          type="text"
          className={!error ? "lastName" : "lastNameEmpty"}
          placeholder={!error ? "Last Name" : ""}
          onChange={onLastNameChange}
        />
        {error && (
          <span
            style={{
              color: "red",
              fontSize: "12px",
              textAlign: "right",
              paddingRight: "10px",
            }}
          >
            <i>Last Name cannot be empty</i>
          </span>
        )}
        <input
          type="text"
          className={!error ? "email" : "emailEmpty"}
          placeholder={!error ? "Email" : ""}
          onChange={onEmailChange}
        />
        {error && (
          <span
            style={{
              color: "red",
              fontSize: "12px",
              textAlign: "right",
              paddingRight: "10px",
            }}
          >
            <i>Email cannot be empty</i>
          </span>
        )}

        <input
          type="text"
          className={!error ? "password" : "passwordEmpty"}
          placeholder={!error ? "Password" : ""}
          onChange={onPasswordChange}
        />
        {error && (
          <span
            style={{
              color: "red",
              fontSize: "12px",
              textAlign: "right",
              paddingRight: "10px",
            }}
          >
            <i>Password cannot be empty</i>
          </span>
        )}
        <input
          type="submit"
          className={buttonStyle}
          value="Claim your free trial"
          onMouseOver={changeBtnHover}
          onMouseOut={changeBtnInactive}
          onClick={onSubmit}
        />
        <div className="term">
          <p className="terms">
            By clicking the button, you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </div>
      </form>
    </div>
  );
}
