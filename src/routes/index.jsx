import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../view/about";
import Contact from "../view/contact";
import Home from "../view/home";
import Login from "../view/login";
import Beers from "../view/beers";
import Beer from "../view/beer";


export default function GetRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="beers" element={<Beers />} />          
            <Route path="beer/:id" element={<Beer />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
        </Routes>
    );
  }