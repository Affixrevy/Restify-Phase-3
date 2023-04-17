import React from 'react';
import PopUpConfirm from "../components/PopUpConfirm";

const ReservationPopUp = (props) => {
    const onClose = props.onClose;

    const onSubmit = () => {
        // TODO: Do something here to actually handle the submission of a reservation
        console.log("Hello");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                <main className="flex flex-col items-center justify-center py-10">
                    <div className="flex items-center justify-center p-12">
                        <div className="flex flex-col bg-BACKGROUND_COLOR_2 p-5 rounded-2xl">
                            <p className="text-xl font-semibold text-FONT_COLOR_1">
                                Make Reservation
                            </p>
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
                                    >Guests Number</label
                                    >
                                </div>
                            </div>
                            <div className="mt-8 flex gap-5">
                                <div className="input_text relative w-full">
                                    <div className="relative mb-4">
                                        <input
                                            type="date"
                                            id="arrival"
                                            className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                            placeholder=" "
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
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="departure"
                                            className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Departure</label
                                        >
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg text-center text-FONT_COLOR_1 font-semibold mb-3">
                                Payment amount: <b>$110 CAD</b> night
                            </p>
                            <div className="flex justify-between space-x-3">
                                <button
                                    onClick={onClose}
                                    className="hover:shadow-form rounded-md bg-BUTTON_COLOR py-3 px-8 text-center text-base font-semibold text-FONT_COLOR_1 outline-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={onSubmit}
                                    className="hover:shadow-form rounded-md bg-ACCENT_COLOR py-3 px-8 text-center text-base font-semibold text-FONT_COLOR_1 outline-none"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
        </div>
    );
}

export default ReservationPopUp;