import React from 'react';
import { Link } from "react-router-dom";
import account from "../assets/img/account_circle_white_48dp.svg"

const NavBar = () => {
    return (
        <header className="bg-BACKGROUND_COLOR_2">
            <nav className="relative container mx-auto p-6">
                <div className="flex item-center justify-between h-16">
                    <Link to="/" className="md:p-3 px-6 pt-2 Restify_logo">Restify</Link>
                    <Link to="/profile" className="bg-BACKGROUND_COLOR_2 rounded-full w-10 h-10 pt-3 z-50">
                        <img src={account} alt={""}/>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;