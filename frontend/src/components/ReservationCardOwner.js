import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import PopUpConfirm from "./PopUpConfirm";

const ReservationCardOwner = (props) => {
    // Actual data passed in from previous page
    const [refresh, setRefresh] = useState(false);
    const [listingName, setListingName] = useState('');
    const listing = props.listing;
    const fetchUserId = listing.user;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    console.log(listing);

    let status = "Undefined";
    let option = -1;
    if (listing.status === 'pending_awaiting_confirmation') {
        // accept / deny
        option = 1;
        status = "Pending - Awaiting Confirmation";
    } else if (listing.status === 'confirmed') {
        // terminate
        option = 2;
        status = "Confirmed";
    } else if (listing.status === 'expired') {
        // no button
        option = 3;
        status = "Expired";
    } else if (listing.status === 'cancelled_awaiting_confirmation') {
        // accept cancel / deny cancel
        option = 4;
        status = "Cancelled - Awaiting Confirmation";
    } else if (listing.status === 'cancelled') {
        // no button
        option = 3;
        status = "Cancelled";
    } else if (listing.status === 'terminated') {
        // no button
        option = 3;
        status = "Terminated";
    } else if (listing.status === 'completed') {
        // no button
        option = 3;
        status = "Completed";
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/properties/select/${listing.to_book_property}/`);
            const responseData = await response.json();
            const description = responseData.description.split("\n");
            console.log(responseData.name);
            setListingName(responseData.name);
        }

        async function fetchUser() {
            const response = await fetch(`http://localhost:8000/api/users/${fetchUserId}/`)
            const responseData = await response.json()
            console.log(responseData)
            setFirstName(responseData.first_name);
            setLastName(responseData.last_name);
        }

        fetchData().then(listing => {
            fetchUser().then(r => {})
        })

    }, [refresh])

    return (
        <div className="col-span-1 drop-shadow-lg">
            <div
                className="items-start rounded-2xl text-FONT_COLOR_2 hover:bg-gray-100 dark:bg-STROKE_COLOR dark:hover:bg-STROKE_COLOR grid grid-cols-3 gap-4 mb-2 h-44">
                <div className="m-3 ml-4 col-span-2">
                    <h1 className="text-2xl font-bold tracking-tight dark:text-FONT_COLOR_1">{listingName}</h1>
                    <div className="flex items-center">
                        <h1 className="pt-1 font-bold text-white">
                            {status}
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <p>Guest: {firstName} {lastName}</p>
                        <p>Start Date: {listing.start_date}</p>
                        <p>End Date: {listing.end_date}</p>
                    </div>
                    </div>
                <div className="flex flex-col items-center py-3">
                    <Link to={`/view-guest/${fetchUserId}`}>
                        <button className="bg-BUTTON_COLOR hover:bg-ACCENT_COLOR text-white font-bold py-2 px-4 rounded mb-2 md:w-36">
                            Comment
                        </button>
                    </Link>
                    {(option === 1) && (
                        <>
                            <PopUpConfirm
                                title={"Are you sure that you want to accept this booking?"}
                                text={"Accept"}
                                id={listing.id}
                            ></PopUpConfirm>
                            <PopUpConfirm
                                title={"Are you sure that you want to deny this booking?"}
                                text={"Deny"}
                                id={listing.id}
                            ></PopUpConfirm>
                        </>
                    )}

                    {(option === 2) && (
                        <>
                            <PopUpConfirm
                                title={"Are you sure that you want to terminate this booking?"}
                                text={"Terminate"}
                                id={listing.id}
                            ></PopUpConfirm>
                        </>
                    )}

                    {(option === 3) && (
                        <>
                        </>
                    )}

                    {(option === 4) && (
                        <>
                            <PopUpConfirm
                                title={"Are you sure that you want to accept this cancellation?"}
                                text={"Accept Cancel"}
                                id={listing.id}
                            ></PopUpConfirm>
                            <PopUpConfirm
                                title={"Are you sure that you want to deny this cancellation?"}
                                text={"Deny Cancel"}
                                id={listing.id}
                            ></PopUpConfirm>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReservationCardOwner;