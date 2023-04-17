import React, {useState} from 'react';
import PopUpConfirm from "../components/PopUpConfirm";

const ReservationPopUp = (props) => {
    const onClose = props.onClose;
    const propertyId = props.propertyId;
    const [gotPrice, setGotPrice] = useState(false)
    const [price, setPrice] = useState(0)
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [displayMandatoryDateError, setDisplayMandatoryDateError] = useState(false)
    const [displayDateOverlapError, setDisplayDateOverlapError] = useState(false)
    const [displayMandatoryUserNum, setDisplayMandatoryUserNum] = useState(false)
    const [displayToManyGuests, setDisplayTooManyGuests] = useState(false)
    //TODO finish

    const handleGetPrice = async () => {
        if (!startDate || !endDate) {
            setDisplayMandatoryDateError(true);
            return
        }

        setDisplayMandatoryDateError(false);

        try {
            const url = `http://localhost:8000/properties/${propertyId}/daily_prices/${startDate}/${endDate}/`
            console.log(url)

            return fetch(url).then(response => {
                if (!response.ok) {
                    throw new Error("You fucked up")
                }
                return response.json()
            }).then(data => {
                console.log(data)
                setPrice(data.price)
                setGotPrice(true)
                return (data)
            }).catch(error => {
                console.error("Error during API request:", error);
            });

        } catch (error) {
            console.error("Error during API request:", error);
        }
    }

    const handleConfirm = async () => {
        // TODO: Do something here to actually handle the submission of a reservation
        // console.log("Hello");

        // Gather form data
        // const

        const num_guests = document.getElementById("guest_number").value
        const userID = localStorage.getItem('userID')
        const token = localStorage.getItem('token');

        // console.log(userID)

        const formData = {
            user: userID,
            status: "pending_awaiting_confirmation",
            to_book_property: propertyId,
            start_date: startDate,
            end_date: endDate,
            num_guests: num_guests
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        };

        try {
            const response = await fetch('http://localhost:8000/reservations/create/', requestOptions);
            const data = await response.json();
            console.log(data);
            props.onClose()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <main className="flex flex-col items-center justify-center py-10">
                <div className="flex items-center justify-center p-12">
                    <div className="flex flex-col bg-BACKGROUND_COLOR_2 p-5 rounded-2xl">
                        <p className="text-xl font-semibold text-FONT_COLOR_1">
                            Make Reservation
                        </p>
                        <div className="mt-8 flex gap-5">
                            <div className="input_text relative w-full">
                                <div className="relative mb-4">
                                    <input
                                        type="date"
                                        id="arrival"
                                        className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                    <label
                                        htmlFor="arrival"
                                        className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                    >Arrival</label
                                    >
                                </div>
                            </div>
                            <div className="input_text relative w-full">
                                <div className="relative mb-4">
                                    <input
                                        type="date"
                                        id="departure"
                                        className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                    <label
                                        htmlFor="departure"
                                        className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                    >Departure</label
                                    >
                                </div>
                            </div>
                        </div>
                        {
                            displayMandatoryDateError ? (
                                <p className="text-xs text-red-500 pb-3">You must enter arrival and departure dates</p>
                            ) : (
                                <p></p>
                            )
                        }
                        {
                            gotPrice ? (
                                <div>
                                    <div className="input_text mt-8 relative">
                                        <div className="relative mb-4">
                                            <input
                                                type="number"
                                                id="guest_number"
                                                className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="guest_number"
                                                className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                            >Guests Number</label>
                                        </div>
                                    </div>
                                    <p className="text-lg text-center text-FONT_COLOR_1 font-semibold mb-3 my-2">
                                        Payment amount: <b>${price} CAD</b>
                                    </p>
                                </div>
                            ) : (
                                <p className="text-lg text-center text-FONT_COLOR_1 font-semibold mb-3">
                                    Payment amount: <b>$??? CAD</b>
                                </p>
                            )
                        }

                        <div className="flex justify-between space-x-3">
                            <button
                                onClick={onClose}
                                className="hover:shadow-form rounded-md bg-BUTTON_COLOR py-3 px-8 text-center text-base font-semibold text-FONT_COLOR_1 outline-none"
                            >
                                Cancel
                            </button>
                            {
                                gotPrice ? (
                                    <button
                                        onClick={handleConfirm}
                                        className="hover:shadow-form rounded-md bg-ACCENT_COLOR py-3 px-8 text-center text-base font-semibold text-FONT_COLOR_1 outline-none"
                                    >
                                        Confirm
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleGetPrice}
                                        className="hover:shadow-form rounded-md bg-ACCENT_COLOR py-3 px-8 text-center text-base font-semibold text-FONT_COLOR_1 outline-none"
                                    >
                                        Get Price
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ReservationPopUp;