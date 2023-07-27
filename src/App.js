import React, {useState, useEffect} from "react";
import './App.css';
import Home from "./Components/Home/home"
import NavBar from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() =>{
      updateLoad(false);
    },1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path = "/" element = {<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
