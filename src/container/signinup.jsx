import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProfileCard from "../profileCard/profileCard";
import "./signinup.css";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (isLoggedIn) {
    navigate("/home");
  }
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [formType, setFormType] = useState("login");
  const [age, setAge] = useState(null);
  const calculateAge = (birthday) => {
    const birthdate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    setAge(age);
  };

  const handleClick = (e) => {
    console.log("hi");
    console.log(uname);
    console.log(pwd);

    if (uname === "admin" && pwd === "admin") {
      console.log("hello");
      setIsLoggedIn(true);
      navigate("/home");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "login") {
      // Send the user's credentials to the server for authentication
      // If the authentication is successful, the server will return a token
      // Store the token in local storage
      // localStorage.setItem("username", "admin");
      // localStorage.setItem("password", "admin");
    } else {
      // Save the user's credentials to the local storage
      localStorage.setItem("username", "admin");
      localStorage.setItem("password", "admin");

      // Navigate to the login page
      setFormType("login");
    }
  };

  return (
    <div>
      {formType === "login" ? (
        <>
          <h2 className="form-title">Login</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                className="form-control"
                type="text"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                className="form-control"
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleClick}
            >
              Login
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setFormType("signup")}
            >
              Sign Up
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className="form-title">SignUp</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                className="form-control"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                className="form-control"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group" style={{ display: "flex" }}>
              <label style={{ display: "inline-block", marginRight: "75px" }}>
                First Name:
              </label>
              <input
                className="form-control"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label style={{ display: "inline-block" }}>Last Name:</label>
              <input
                className="form-control"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={formType === "signup"}
              />
            </div>

            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                className="form-control"
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Birthday:</label>
              <input
                className="form-control"
                type="date"
                value={birthday}
                onChange={(e) => {
                  setBirthday(e.target.value);
                  calculateAge(e.target.value);
                }}
                required
              />
              {age !== null && <p>You are {age} years old.</p>}
            </div>
            <button className="btn btn-primary" type="submit">
              SignUp
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export { Auth };

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the user's credentials from the local storage
    localStorage.removeItem("token");
    // localStorage.removeItem("password");
    // Navigate back to the login page
    navigate("/login");
  };

  return (
    <>
      <div>
        <ProfileCard />
      </div>
      <div className="logout">
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};
export { Home };

const Change = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      setIsLoggedIn(true);
    }
  }, []); // Empty dependency array is important here, to run this effect only once

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <Navigate to="/home" />
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }
};
export { Change };
