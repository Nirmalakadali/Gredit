import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Auth, Change, Home } from "./container/signinup";
import Navbar from "./Navbar/Navbar";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const email = localStorage.getItem("email");
  // const password = localStorage.getItem("password");
  // if (email && password) {
  //   setIsLoggedIn(true);
  // }
  localStorage.setItem("username", "admin");
  localStorage.setItem("password", "admin");
  const withAuth = (WrappedComponent) => {
    return (props) => {
      const email = localStorage.getItem("username");
      const password = localStorage.getItem("password");
      if (!email || !password) {
        return <Navigate to="/login" />;
      }
      return <WrappedComponent {...props} />;
    };
  };

  const HomeWithAuth = withAuth(Home);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Change />} />
        <Route path="/login" element={<Auth />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/home" element={<HomeWithAuth />} />
      </Routes>
    </>
  );
}

export default App;
