import React from "react";
import "./scss/index.scss";
import "../common/scss/style.scss";
import Facebook from "../../img/facebook_icon_white.png";
import Twitter from "../../img/twitter_icon_white.png";
import Pinterest from "../../img/pinterest_icon_white.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export default function Footer({isDarkMode}) {
    return (
        <>
            <div id="footer" className={`row ${!isDarkMode ? "bg-lighter-blue" : "bg-lighter-brown"} pb-3 pt-3`}>
                <div className="col-2">
                </div>
                <div className="col-4 display-inline text-end border-end pe-5">
                    <Link className="txt-white text-capitalize" to="/">Home</Link> 
                    <br />
                    <Link className="txt-white" to="/about">About us</Link>
                    <br />
                    <Link className="txt-white" to="/beers">Beers</Link>
                    <br />
                    <Link className="txt-white" to="/contact">Contact</Link>

                </div>
                <div className="col-4 display-inline txt-white ps-5">
                    Kontakt telefon: +381 66 112233 <br />
                    Email: beery@gmail.com <br />
                    Adresa: Ul. Janka Despotovića <br />
                    Novi Beograd, Srbija
                </div>
                <div className="col-2 display-inline">
                </div>
            </div>
            <div className={`row ${!isDarkMode ? "bg-darker-blue" : "bg-darker-brown"} text-center txt-white`}>
                <div className="col-6 text-end pe-4 my-auto">
                    © 2022 Beery | All rights reserved &emsp;
                </div>
                <div className="col-6 text-start ps-5 my-auto">

                        <a href="https://www.facebook.com" target={"_blank"} rel="noreferrer">
                            <img src={Facebook} rel="noreferrer noopener" alt="" className="footer-icon"></img>
                        </a> 
                        &emsp;
                        <a href="https://www.twitter.com" target={"_blank"} rel="noreferrer">
                            <img src={Twitter} rel="noreferrer noopener" alt="" className="footer-icon"></img>
                        </a> 
                        &emsp;
                        <a href="https://www.pinterest.com" target={"_blank"} rel="noreferrer">
                            <img src={Pinterest} rel="noreferrer noopener" alt="" className="footer-icon"></img>
                        </a> 

                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state?.session?.user.isLoggedIn,
        isDarkMode: state?.displayMode?.isDarkMode
    };
};

Footer = connect(mapStateToProps)(Footer);