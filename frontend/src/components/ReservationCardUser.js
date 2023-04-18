import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import PopUpConfirm from "./PopUpConfirm";

const ReservationCardUser = (props) => {
    const [propertyName, setPropertyName] = useState('')
    const r = props.reservation;
    console.log(r);

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

    const url = `/property/${r.to_book_property}`

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
                    <PopUpConfirm
                        title={"Are you sure that you want to cancel this booking?"}
                        text={"Cancel"}
                        id={r.id}
                    ></PopUpConfirm>
                </div>
            </div>
        </div>
    );
};

export default ReservationCardUser;