import React, { useState, useEffect } from "react";
import './App.css';
import Home from "./Components/Home/home"
import NavBar from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import { AdminNews } from './Components/Home/Board/News/adminNews'
import Olympiads from './Components/Olympiads/Olympiads'
import Parents from './Components/Parents/Parents'
import AboutUs from "./Components/AboutUs/AboutUs";
import { AdminAnnoucements } from './Components/Home/Board/Annoucements/adminAnnoucements'
import {AdminPrograms} from "./Components/Programs/adminPrograms"
import {Programs} from "./Components/Programs/Programs"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/top_olympiads" element={<Home />} />
          <Route exact path="/top_olympiads/Olympiads" element={<Olympiads />} />
          <Route exact path="/top_olympiads/Parents" element={<Parents />} />
          <Route exact path="/top_olympiads/Aboutus" element={<AboutUs />} />
          <Route exact path="/top_olympiads/Programs" element={<Programs />} />
          <Route exact path="/top_olympiads/admin/news" element={<AdminNews />} />
          <Route exact path="/top_olympiads/admin/annoucements" element={<AdminAnnoucements />} />
          <Route exact path="/top_olympiads/admin/programs" element={<AdminPrograms />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
