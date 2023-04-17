import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const ReservationCardUser = (props) => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const state = {
        one: "Pending awaiting confirmation",
        two: "Cancelled awaiting confirmation",
        three: "Confirmed"
    }

    const [propertyName, setPropertyName] = useState('')
    const r = props.reservation;
    console.log(r)

    let status = "Undefined";
    if (r.status === 'pending_awaiting_confirmation') {
        status = "Pending - Awaiting Confirmation";
    } else if (r.status === 'confirmed') {
        status = "Confirmed";
    } else if (r.status === 'expired') {
        status = "Expired";
    } else if (r.status === 'cancelled_awaiting_confirmation') {
        status = "Cancelled - Awaiting Confirmation";
    } else if (r.status === 'cancelled') {
        status = "Cancelled";
    } else if (r.status === 'terminated') {
        status = "Terminated";
    } else if (r.status === 'completed') {
        status = "Completed";
    }


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/properties/select/${r.to_book_property}/`)
            const responseData = await response.json()
            const description = responseData.description.split("\n");
            console.log("FETCH DATA")
            console.log(responseData.name)
            setPropertyName(responseData.name)
        }

        fetchData().then(r => {
        })
    }, [])

    // TODO: Replace this with actual url to link this component to the corresponding property page
    const url = "/property/3"

    return (
        <div className="w-5/6 justify-center py-2 drop-shadow-lg">
            <div
                className="rounded-2xl text-FONT_COLOR_2 hover:bg-gray-100 dark:bg-STROKE_COLOR dark:hover:bg-STROKE_COLOR grid grid-cols-3 gap-4">
                <div className="m-3 ml-4 col-span-2">
                    <h1 className="text-2xl font-bold tracking-tight dark:text-FONT_COLOR_1">{propertyName}</h1>
                    <div className="flex items-center">
                        <h1 className="pt-1 font-bold text-white">
                            {status}
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <p>Start Date: {r.start_date}</p>
                        <p>End Date: {r.end_date}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center py-3">
                    <Link to={url}>
                        <button
                            className="bg-BUTTON_COLOR hover:bg-ACCENT_COLOR text-white font-bold py-2 px-4 rounded mb-2 md:w-36">
                            View Property
                        </button>
                    </Link>
                    <button
                        className="bg-BUTTON_COLOR hover:bg-ACCENT_COLOR text-white font-bold py-2 px-4 rounded mb-2 md:w-36 mt-2">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReservationCardUser;