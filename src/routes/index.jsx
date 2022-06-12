import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../view/about";
import Blogs from "../view/blogs";
import Contact from "../view/contact";
import Home from "../view/home";
import Login from "../view/login";

export default function GetRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="blog/:id" element={<Blog />} /> */}
        </Routes>
    );
  }