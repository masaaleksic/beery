import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import '../common/scss/style.scss';
import "./scss/index.scss";
import { connect } from "react-redux";
import store from "../../redux/store";
import { setDisplayMode } from "../../redux/displayMode/actions";

export default function Header({ isLoggedIn, isDarkMode }) {

    const changeDisplayMode = () => {
        console.log(isDarkMode);
        store.dispatch(setDisplayMode({ isDarkMode: !isDarkMode }))
    }

    return (
        <>
            <div id="header" className={`row ${!isDarkMode ? 'bg-darker-blue' : 'bg-darker-brown'} mx-auto h-height`}>
                <div className="col-2 my-auto">
                    <Link to="/">
                        <img src={Logo} rel="noreferrer noopener" alt="" className="header-icon py-1"></img>
                    </Link>
                </div>
                <div className="col-8 text-center text-20 my-auto">
                    <Link className="txt-white text-capitalize" to="/">Home</Link> &emsp;
                    <Link className="txt-white" to="/blogs">Blogs</Link>&emsp;
                    <Link className="txt-white" to="/about">About us</Link>&emsp;
                    <Link className="txt-white" to="/contact">Contact</Link>
                </div>
                <div className="col-1 text-20 my-auto">
                    {
                        isLoggedIn ?
                            <Link className="txt-white " to="/">Logout</Link> :
                            <Link className="txt-white " to="/login">Login</Link>
                    }
                </div>
                <div className="col-1 my-auto">
                    <p className="mb-0 txt-white text-center text-12" onClick={changeDisplayMode}>Change display mode</p>
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

Header = connect(mapStateToProps)(Header);