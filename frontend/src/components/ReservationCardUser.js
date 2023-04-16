import React from 'react';
import { Link } from "react-router-dom";

const ReservationCardUser = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const state = {
        one: "Pending awaiting confirmation",
        two: "Cancelled awaiting confirmation",
        three: "Confirmed"
    }

    // TODO: Replace this with actual url to link this component to the corresponding property page
    const url = "/property/3"

    return (
        <div className="w-5/6 justify-center py-2">
            <div
                className="rounded-2xl text-FONT_COLOR_2 hover:bg-gray-100 dark:bg-STROKE_COLOR dark:hover:bg-STROKE_COLOR grid grid-cols-3 gap-4">
                <div className="m-3 ml-4 col-span-2">
                    <h1 className="text-2xl font-bold tracking-tight dark:text-FONT_COLOR_1">Hogwarts</h1>
                    <div className="flex items-center">
                        <h1 className="pt-1 font-bold text-white">
                            Pending
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <p>Owner - Albus Dumbledore</p>
                        <p>Start Date: {month}/{day}/{year}</p>
                        <p>End Date: {month}/{day + 5}/{year}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3">
                    <Link to={url}>
                        <button className="bg-BUTTON_COLOR hover:bg-ACCENT_COLOR text-white font-bold py-2 px-4 rounded mb-2 md:w-36">
                            View Property
                        </button>
                    </Link>
                    <button className="bg-BUTTON_COLOR hover:bg-ACCENT_COLOR text-white font-bold py-2 px-4 rounded mb-2 md:w-36 mt-2">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReservationCardUser;