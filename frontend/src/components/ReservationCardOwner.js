import React from 'react';
import { Link } from "react-router-dom";
import PopUpConfirm from "./PopUpConfirm";

const ReservationCardOwner = (props) => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const state = {
        one: "Pending awaiting confirmation",
        two: "Cancelled awaiting confirmation",
        three: "Confirmed"
    }
    let chosen = state.one;

    if (props.chosen === 1) {
        chosen = state.one;
    } else if (props.chosen === 2) {
        chosen = state.two;
    } else if (props.chosen === 3) {
        chosen = state.three;
    }

    return (
        <div className="col-span-1">
            <div
                className="items-start rounded-2xl text-FONT_COLOR_2 hover:bg-gray-100 dark:bg-STROKE_COLOR dark:hover:bg-STROKE_COLOR grid grid-cols-3 gap-4 mb-2 h-44">
                <div className="m-3 ml-4 col-span-2">
                    <h1 className="text-2xl font-bold tracking-tight dark:text-FONT_COLOR_1">Hogwarts</h1>
                    <div className="flex items-center">
                        <h1 className="pt-1 font-bold text-white">
                            Pending
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <p>Guest - Harry Potter</p>
                        <p>Start Date: {month}/{day}/{year}</p>
                        <p>End Date: {month}/{day + 5}/{year}</p>
                    </div>
                    </div>
                <div className="flex flex-col items-center py-3">
                    <Link to={"/view-guest"}>
                        <button className="bg-BUTTON_COLOR hover:bg-ACCENT_COLOR text-white font-bold py-2 px-4 rounded mb-2 md:w-36">
                            Comment
                        </button>
                    </Link>
                    {(chosen === "Pending awaiting confirmation" || chosen === "Cancelled awaiting confirmation") && (
                        <>
                            <PopUpConfirm title={"Are you sure that you want to confirm this booking?"} text={"Confirm"}>
                            </PopUpConfirm>
                            <PopUpConfirm title={"Are you sure that you want to deny this booking?"} text={"Deny"}>
                            </PopUpConfirm>
                        </>
                    )}

                    {chosen === "Confirmed" && (
                        <>
                            <PopUpConfirm title={"Are you sure that you want to terminate this booking?"} text={"Terminate"}>
                            </PopUpConfirm>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReservationCardOwner;