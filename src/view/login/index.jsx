import React, { useState } from 'react';
import store from "../../redux/store";
import { setSession } from '../../redux/session/actions';
import { Modal } from 'react-bootstrap';

export default function Login() {
    const user = {
        username: "masa",
        password: "misa"
    };

    const [isValidUser, setIsValidUser] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const loginSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username === user.username && password === user.password) {
            store.dispatch(setSession({ isLoggedIn: true, isAdmin: true, username: username }));
            setIsValidUser(true);
            setIsLoggedIn(store.getState().session?.user.isLoggedIn);
        } else {
            setIsValidUser(false);
            setShow(true);
        }
    };
    return (
        <>
            {
                !isValidUser && <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Login failed!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Your username or password is incorrect. Please, try again!</Modal.Body>
                    </Modal>
                </>
            }
            {
                isLoggedIn ?
                    <>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <p className='text-center mb-0'>You have successfully logged in!</p>
                                </div>
                            </div>
                        </div>
                    </> : <>
                        <div className='row'>
                            <div className='col-md-2 offset-md-5 my-5'>
                                <form onSubmit={loginSubmit}>
                                    <label htmlFor="username">Username:</label> <br />
                                    <input placeholder="Enter username" type="text" id="username" name="usern" className='w-100' /> <br /><br />
                                    <label htmlFor="password">Password:</label> <br />
                                    <input placeholder="Enter password" type="password" id="password" className='w-100' /> <br /><br />
                                    <input type="submit" value="Login" className='w-100' />
                                </form>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}