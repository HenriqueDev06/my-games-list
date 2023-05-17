import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthPage from "./pages/auth";
import Home from "./pages/home";
import MyList from "./pages/myList";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<AuthPage />} />
        <Route exact path="/mylist" element={<MyList />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
