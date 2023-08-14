import React, { useState, useEffect } from "react";
import './App.css';
import Home from "./Components/Home/home"
import NavBar from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import { AdminNews } from './Components/Home/Board/News/adminNews'
import Olympiads from './Components/Olympiads/Olympiads'
import Parents from './Components/Parents/Parents'
import AboutUs from "./Components/AboutUs/AboutUs";
import Instructors from "./Components/Instructors/Instructors";
import { AdminAnnoucements } from './Components/Home/Board/Annoucements/adminAnnoucements'
import {AdminPrograms} from "./Components/Programs/adminPrograms"
import { AdminTimetable } from "./Components/Timetable/adminTimetable";
import {Programs} from "./Components/Programs/Programs"
import {Admin} from "./Components/Admin/Admin"
import {Timetable} from "./Components/Timetable/Timetable"
import { HashRouter as Router, Route, Routes } from "react-router-dom";

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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Olympiads" element={<Olympiads />} />
          <Route exact path="/Parents" element={<Parents />} />
          <Route exact path="/Aboutus" element={<AboutUs />} />
          <Route exact path="/Programs" element={<Programs />} />
          <Route exact path="/Timetable" element={<Timetable />} />
          <Route exact path="/Instructors" element={<Instructors />} />
          <Route exact path="/admin/news" element={<AdminNews />} />
          <Route exact path="/admin/annoucements" element={<AdminAnnoucements />} />
          <Route exact path="/admin/programs" element={<AdminPrograms />} />
          <Route exact path = "/admin/timetable" element = {<AdminTimetable />} />
          <Route exact path = "/admin" element = {<Admin />} />
          <Route exact path = "" element = {<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
