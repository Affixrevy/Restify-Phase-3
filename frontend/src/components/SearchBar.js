import React from 'react';

const SearchBar = () => {
    return (
        <div className="lg:absolute lg:top-10 w-full">
            <div className="relative container mx-auto py-3 md:px-10 lg:py-10 flex items-center justify-center">
                <div
                    className="w-full md:w-3/4 max-w-7xl drop-shadow-lg p-6 rounded-2xl shadow dark:bg-POPUP_BACKGROUND_COLOR dark:border-gray-700">
                    <div className="flex flex-col lg:flex-row lg:justify-items-stretch justify-evenly">
                        <div className="relative py-2 lg:py-0 lg:mx-2 lg:w-1/2">
                            <input type="text" id="location"
                                   className="block rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                   placeholder=" "/>
                            <label htmlFor="location"
                                   className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Location</label>
                        </div>
                        <div className="relative py-2 lg:py-0 lg:mx-2 lg:w-1/6">
                            <input type="text" id="arrival"
                                   className="block  rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                   placeholder=" "/>
                            <label htmlFor="arrival"
                                   className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Arrival</label>
                        </div>
                        <div className="relative py-2 lg:py-0 lg:mx-2 lg:w-1/6">
                            <input type="text" id="departure"
                                   className="block  rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                   placeholder=" "/>
                            <label htmlFor="departure"
                                   className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Departure</label>
                        </div>
                        <div className="relative py-2 lg:py-0 lg:mx-2 lg:w-1/6 xl:w-1/12">
                            <input type="number" id="guests"
                                   className="block rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                   placeholder=" "/>
                            <label htmlFor="guests"
                                   className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Guests</label>
                        </div>
                        <div className="py-2 lg:py-0 lg:mx-2 lg:w-1/12">
                            <button
                                className="rounded-2xl w-full h-full bg-BUTTON_COLOR text-center text-justify-center ">
                                <span className="material-symbols-outlined text-white">search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;