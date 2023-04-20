import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import account from "../assets/img/account_circle_white_48dp.svg"
import {default as NotificationDropdown} from "./NotificationDropdown.js"

const NavBar = () => {

    // const notifications = [
    //     {sender: "Harry"},
    //     {sender: "Arthur"},
    //     {sender: "Thomas"},
    //     {sender: "Vahid"}
    // ];

    const isLoggedIn = () => {
        const token = localStorage.getItem('token');
        // console.log(token)
        return token !== null;
    };

    const userIsLoggedIn = isLoggedIn();

    return (
        <header className="bg-BACKGROUND_COLOR_2">
            <nav className="relative container mx-auto p-6">
                <div className="flex item-center justify-between h-16">
                    <Link to="/" className="md:p-3 px-6 pt-2 Restify_logo">Restify</Link>
                    <div className="flex w-40 justify-evenly">
                        {userIsLoggedIn ? (
                            <>
                                <NotificationDropdown></NotificationDropdown>
                                <Link to="/profile" className="bg-BACKGROUND_COLOR_2 rounded-full w-10 h-10 pt-3 z-50">
                                    <img src={account} alt={""}/>
                                </Link>
                            </>
                        ) : (
                            <Link to="/login" className="z-50">
                                <button
                                    className="my-2 bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-auto font-bold py-2 px-4 rounded-full"
                                >
                                    Log In
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;