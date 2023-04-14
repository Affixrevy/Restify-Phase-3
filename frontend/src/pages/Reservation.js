import React from 'react';
import NavBar from "../components/NavBar";

const Reservation = () => {
    return (
        <body className="h-screen bg-BACKGROUND_COLOR_1">
            <NavBar></NavBar>
            <main className="flex flex-col items-center justify-center py-10">
                <div className="flex items-center justify-center p-12">
                    <div className="flex flex-col bg-BACKGROUND_COLOR_2 p-5 rounded-2xl">
                        <p className="text-xl font-semibold text-FONT_COLOR_1">
                            Make Reservation
                        </p>
                        <div className="input_text mt-8 relative">
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    id="default_filled"
                                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="default_filled"
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
                                        id="default_filled"
                                        className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="default_filled"
                                        className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                    >Date</label
                                    >
                                </div>
                            </div>
                            <div className="input_text relative w-full">
                                <div className="relative mb-4">
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        className="w-full rounded-md border border-BACKGROUND_COLOR_2 bg-TEXT_FIELD_COLOR py-3 px-6 text-base font-medium text-FONT_COLOR_2 outline-none focus:border-ACCENT_COLOR focus:shadow-md"
                                    />
                                    <label
                                        htmlFor="default_filled"
                                        className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                    >Time</label
                                    >
                                </div>
                            </div>
                        </div>
                        <p className="text-lg text-center text-FONT_COLOR_1 font-semibold mb-3">
                            Payment amount: <b>$110 CAD</b> night
                        </p>
                        <div className="flex justify-center items-center">
                            <button
                                className="hover:shadow-form rounded-md bg-BUTTON_COLOR py-3 px-8 text-center text-base font-semibold text-FONT_COLOR_1 outline-none"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
};

export default Reservation;