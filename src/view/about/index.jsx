import React from 'react';
import "./scss/index.scss";
import "../common/scss/style.scss";
import Beer from "../../img/beer-machine.jpg";

export default function About() {
    return (
        <>
            <div className="first-div d-flex align-items-center justify-content-center text-center">
                <div className="">
                    <h1 className="txt-darker-brown"><b>This is our story!</b></h1>
                    <h5 className="txt-beige">Short story how we started our business.</h5>
                </div>
            </div>
            <div className="second-div d-flex justify-content-center txt-darker-brown py-3">
                <div className="second-div offset-2 d-flex flex-column me-4">
                    <h2 className="mt-4 text-center">The Beggining</h2><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                </div>
                <div className="second-div">
                    <img src={Beer} className="me-3"></img>
                </div>
            </div>
            <hr className="mx-5" />
            <div className="second-div d-flex justify-content-center txt-darker-brown py-3">
                <div className="second-div  offset-1 me-4">
                    <img src={Beer} className="me-3"></img>
                </div>
                <div className="second-div d-flex flex-column">
                    <h2 className="mt-4 text-center">The Beggining</h2><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                </div>
            </div>
        </>
    );
}