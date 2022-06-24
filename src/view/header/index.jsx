import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../img/beer-logo.png";
import '../common/scss/style.scss';
import "./scss/index.scss";
import { connect } from "react-redux";
import store from "../../redux/store";
import { setDisplayMode } from "../../redux/displayMode/actions";
import { setSession } from '../../redux/session/actions';
import { useState } from 'react';
import menuImg from "../../img/menu.png";

export default function Header({ isLoggedIn, isDarkMode }) {
    const [showMenu, setShowMenu] = useState(false);

    const changeDisplayMode = () => {
        console.log(isDarkMode);
        store.dispatch(setDisplayMode({ isDarkMode: !isDarkMode }))
    }

    return (
        <>
                    <div className={`mobile-header ${!isDarkMode ? 'bg-darker-blue' : 'bg-darker-brown'}`}>
                        <img src={menuImg} className='menu-img m-1' onClick={() => setShowMenu(!showMenu)} />
                    </div> 
                    <div id="header" className={`row ${!isDarkMode ? 'bg-darker-blue' : 'bg-darker-brown'} h-height`}>
                        <div className="col-2 my-auto">
                            <Link to="/" className='d-flex align-items-center'>
                                <img src={Logo} rel="noreferrer noopener" alt="" className="header-icon p-2"></img>
                                <p className="text-35 text-white d-inline-block logo-text mb-0 pt-3 font-duff">BEERY</p>
                            </Link>
                        </div>
                        <div className="col-8 text-center text-20 my-auto">
                            <Link className="txt-white text-capitalize" to="/">Home</Link> &emsp;
                            <Link className="txt-white" to="/beers">Beers</Link>&emsp;
                            <Link className="txt-white" to="/about">About us</Link>&emsp;
                            <Link className="txt-white" to="/contact">Contact</Link>
                        </div>
                        <div className="col-1 text-20 my-auto">
                            {
                                isLoggedIn ?
                                    <Link className="txt-white " to="/" onClick={() => { store.dispatch(setSession({ isLoggedIn: false, isAdmin: false, username: "" })) }}>Logout</Link> :
                                    <Link className="txt-white " to="/login">Login</Link>
                            }
                        </div>
                        <div className="col-1 my-auto">
                            <p className="mb-0 txt-white text-center text-12" role="button" onClick={changeDisplayMode}>Change display mode</p>
                        </div>
                    </div>
            {
                showMenu &&
                <div>
                    <div className={`my-auto p-3 ${!isDarkMode ? 'bg-lighter-blue' : 'bg-lighter-brown'} fw-bold`}>
                        <p><Link to="/" onClick={()=> setShowMenu(false)}>Home</Link></p>
                        <p><Link to="/beers" onClick={()=> setShowMenu(false)}>Beers</Link></p>
                        <p><Link to="/about" onClick={()=> setShowMenu(false)}>About us</Link></p>
                        <p><Link to="/contact" onClick={()=> setShowMenu(false)}>Contact</Link></p>
                        {
                            isLoggedIn ?
                                <p><Link to="/" onClick={() => { store.dispatch(setSession({ isLoggedIn: false, isAdmin: false, username: "" })); setShowMenu(false); }}>Logout</Link></p> :
                                <p><Link to="/login" onClick={()=> setShowMenu(false)}>Login</Link></p>
                        }
                        <p className="mb-0 text-center text-12" role="button" onClick={changeDisplayMode}>Change display mode</p>
                    </div>
                </div>
            }
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
