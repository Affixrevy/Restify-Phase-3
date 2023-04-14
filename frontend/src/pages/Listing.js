import NavBar from "../components/NavBar";
import SubmitFile from "../components/SubmitFile";
import SetHoliday from "../components/SetHoliday";

const Listing = () => {
    return (
        <body className="h-screen bg-BACKGROUND_COLOR_1">
            <NavBar></NavBar>
            <main className="flex bg-BACKGROUND_COLOR_1 flex-col items-center">
                <div className="p-6 text-FONT_COLOR_1 w-screen md:w-5/6">
                    <div className="BACKGROUND_COLOR_2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="text-2xl font-bold py-2">
                            Create Listing
                        </div>
                        <div className="flex flex-col space-y-4 divide-y-2">

                            <div className="pt-4">
                                <div className="relative mb-4">
                                    <input type="email" id="address"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "/>
                                    <label htmlFor="address"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Street
                                        Address</label>
                                </div>
                                <div className="relative mb-4">
                                    <div className="relative mb-4">
                                        <input type="text" id="city"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="city"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">City</label>
                                    </div>
                                    <div className="relative mb-4">
                                        <input type="text" id="province"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="province"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Province</label>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center h-20">
                                    <div className="grid grid-cols-2 gap-4 items-center">
                                        <SetHoliday></SetHoliday>
                                        <SubmitFile></SubmitFile>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8 relative">
                                <div className="flex flex-row justify-left space-x-4">
                                    <div className="relative flex-grow mb-4">
                                        <input type="number" id="num_guests"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="num_guests"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Number
                                            of Guests</label>
                                    </div>
                                    <div className="relative flex-grow mb-4">
                                        <input type="number" id="num_beds"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="num_beds"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Beds</label>
                                    </div>
                                    <div className="relative flex-grow mb-4">
                                        <input type="number" id="num_baths"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" "/>
                                        <label htmlFor="num_baths"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Baths</label>
                                    </div>
                                </div>
                                <div className="relative mb-4">
                                    <textarea id="amenities"
                                           className="block rounded-lg px-2.5 pb-10 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "/>
                                    <label htmlFor="amenities"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Amenities</label>
                                </div>
                                <div className="relative mb-6">
                                    <textarea type="text" id="description"
                                           className="block rounded-lg px-2.5 pb-32 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "/>
                                    <label htmlFor="description"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Description</label>
                                </div>
                                <div className="flex flex-row justify-center space-x-4">
                                    <div className="flex flex-col items-start">
                                        <button
                                            className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 font-bold rounded-full">
                                            <a href="../profile_page/profile.html"
                                               className="block overflow-auto py-2 px-4">Cancel</a>
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <button
                                            className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold rounded-full">
                                            <a href="../profile_page/profile.html"
                                               className="block overflow-auto py-2 px-4">Confirm</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
};

export default Listing;