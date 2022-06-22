import React, { useState } from 'react';
import store from "../../redux/store";
import { setSession } from '../../redux/session/actions';

export default function Login(){
    const user = {
        username: "masa",
        password: "misa"
    };

    const [isValidUser, setIsValidUser] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        if(username === user.username && password === user.password){
            store.dispatch(setSession({ isLoggedIn: true, isAdmin: true, username: username }));
            setIsValidUser(true);
            setIsLoggedIn(store.getState().session?.user.isLoggedIn);
        }else {
            setIsValidUser(false);
        }
    };
    return(
        <>
        {
            !isValidUser && <p>LOSI PODACI</p>
        }
        {
            isLoggedIn ? 
            <> 
            USPESNO STE SE LOGOVALI!
            </> :
            <div className="mx-auto my-5">
            <form onSubmit={loginSubmit}>
                <label htmlFor="username">Username:</label> &nbsp;
                <input type="text" id="username" name="usern"/> <br /><br />
                <label htmlFor="password">Password:</label> &nbsp;
                <input type="password" id="password"/> <br /><br />
                <input type="submit" />
            </form>
        </div>
        }
        </>
    );
}