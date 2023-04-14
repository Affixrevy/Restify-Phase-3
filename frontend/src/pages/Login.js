import React from 'react';
import image from "../assets/img/logo_w.png";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <body className="h-screen bg-BACKGROUND_COLOR_1 flex items-center justify-center">
            <div className="BACKGROUND_COLOR_1 w-full rounded flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center mb-4">
                    <img className="max-h-60 flex flex-col justify-center items-center" src={image} alt={"Whatever"}/>
                </div>
                <div className="flex flex-col w-full max-w-xs">
                    <form className="BACKGROUND_COLOR_2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="relative mb-4">
                            <input type="text" id="default_filled"
                                   className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                   placeholder=" "/>
                            <label htmlFor="default_filled"
                                   className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Username</label>
                        </div>
                        <div className="relative mb-6">
                            <input type="password" id="default_filled"
                                   className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                   placeholder=" "/>
                            <label htmlFor="default_filled"
                                   className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Link to="/">
                                <button
                                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold py-2 px-4 rounded-full"
                                >
                                    Sign In
                                </button>
                            </Link>
                            <Link className="inline-block align-baseline font-bold text-sm text-FONT_COLOR_1 hover:text-FONT_COLOR_2 mt-6"
                               to="/signup">
                                Don't have an account yet? Sign Up
                            </Link>
                            <Link className="inline-block align-baseline font-bold text-xs text-FONT_COLOR_1 hover:text-FONT_COLOR_2"
                               to={"#"}>
                                Forgot password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
};

export default Login;