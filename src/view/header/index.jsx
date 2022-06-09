import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import '../common/scss/style.scss';
import "./scss/index.scss";

export default function Header(){
    return(
        <>
            <div id="header" className="row bg-darker-blue mx-auto h-height">
                <div className="col-2 my-auto">
                    <Link to="/">
                        <img src={Logo} rel="noreferrer noopener" alt="" className="header-icon py-1"></img>
                    </Link>
                </div>
                <div className="col-8 text-center text-20 my-auto">
                    <Link className="txt-white text-capitalize" to="/">Home</Link> &emsp;
                    <Link className="txt-white" to="/blogs">Blog</Link>&emsp;
                    <Link className="txt-white" to="/about">About us</Link>&emsp;
                    <Link className="txt-white" to="/contact">Contact</Link>
                </div>
                <div className="col-2 text-20 my-auto">
                <Link className="txt-white " to="/login">Login</Link>
                </div>
            </div>
        </>
    );

}