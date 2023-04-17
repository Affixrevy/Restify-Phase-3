import React from "react";
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar";
import SubmitFile from "../components/SubmitFile";
import SetHoliday from "../components/SetHoliday";

const ModifyProperty = (props) => {
    const navigate = useNavigate();
    const data = {
        address: "420 Awesome Avenue, Toronto, ON, Canada",
        guests_num: 5,
        beds: 10,
        baths: 20,
        amenities: "We have whatever you want. This is definitely not a scam at all lol",
        description: "The detail about 20 baths is just a little sus",
        start_date: '2023-05-01',
        end_date: '2023-06-01'
    }

    const handleCancel = () => {
        // Navigate back to the previous page
        navigate(-1);
    };

    const handleConfirm = () => {
        // Implement the logic for confirming the modification here
        console.log("Confirm modification");
    };

    return (
        <div className="h-screen bg-BACKGROUND_COLOR_1">
            <NavBar></NavBar>
            <main className="flex bg-BACKGROUND_COLOR_1 flex-col items-center">
                <div className="p-6 text-FONT_COLOR_1 w-screen md:w-5/6">
                    <div className="BACKGROUND_COLOR_2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="text-2xl font-bold py-2">
                            Modify Listing
                        </div>
                        <div className="flex flex-col space-y-4 divide-y-2">
                            <div className="pt-4">
                                {/* <div className="relative mb-4">
                                    <input type="email" id="address"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" " defaultValue={data.address}/>
                                    <label htmlFor="address"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Street
                                        Address</label>
                                </div>
                                <div className="relative mb-4">
                                    <div className="relative mb-4">
                                        <input type="text" id="city"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" " defaultValue={data.city}/>
                                        <label htmlFor="city"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">City</label>
                                    </div>
                                    <div className="relative mb-4">
                                        <input type="text" id="province"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" " defaultValue={data.province}/>
                                        <label htmlFor="province"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Province</label>
                                    </div>
                                </div> */}
                                <div className="relative mb-4">
                                    <input type="text" id="address"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" " defaultValue={data.address} disabled/>
                                    <label htmlFor="address"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Street
                                        Address</label>
                                </div>
                                <div className="flex justify-center items-center h-20">
                                    <div className="grid grid-cols-3 gap-4 items-center">
                                        <SetHoliday text="Change Holiday"></SetHoliday>
                                        <SubmitFile multiple={0} text="Edit Thumbnail" title="Change the current thumbnail for the listing"/>
                                        <SubmitFile multiple={1} text="Replace Pictures" title="Change the submitted images for the listing"/>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <div className="text-2xl font-bold py-2">
                                    Availability
                                </div>
                                <div className="relative mb-4">
                                    <input type="date" id="start_data"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           value={data.start_date}
                                        //    onChange={(e) => setStartDate(e.target.value)}
                                    />
                                    <label htmlFor="Start_data"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Start Date</label>
                                </div>
                                <div className="relative mb-4">
                                    <input type="date" id="end_date"
                                           className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                           placeholder=" "
                                           value={data.end_date}
                                        //    onChange={(e) => setEndDate(e.target.value)}
                                    />
                                    <label htmlFor="end_date"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">End Date</label>
                                </div>
                            </div>
                            <div className="pt-8 relative">
                                <div className="flex flex-row justify-left space-x-4">
                                    <div className="relative flex-grow mb-4">
                                        <input type="number" id="num_guests"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" " defaultValue={data.guests_num}/>
                                        <label htmlFor="num_guests"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Number
                                            of Guests</label>
                                    </div>
                                    <div className="relative flex-grow mb-4">
                                        <input type="number" id="num_beds"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" " defaultValue={data.beds}/>
                                        <label htmlFor="num_beds"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Beds</label>
                                    </div>
                                    <div className="relative flex-grow mb-4">
                                        <input type="number" id="num_baths"
                                               className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                               placeholder=" " defaultValue={data.baths}/>
                                        <label htmlFor="num_baths"
                                               className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Baths</label>
                                    </div>
                                </div>
                                <div className="relative mb-4">
                                    <textarea id="amenities"
                                              className="block rounded-lg px-2.5 pb-10 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                              placeholder=" " defaultValue={data.amenities}/>
                                    <label htmlFor="amenities"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Amenities</label>
                                </div>
                                <div className="relative mb-6">
                                    <textarea id="description"
                                              className="block rounded-lg px-2.5 pb-32 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                              placeholder=" " defaultValue={data.description}/>
                                    <label htmlFor="description"
                                           className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Description</label>
                                </div>
                                <div className="flex flex-row justify-center space-x-4">
                                    <div className="flex flex-col items-start">
                                        <button
                                            className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 font-bold rounded-full">
                                            <p className="block overflow-auto py-2 px-4" onClick={handleCancel}>Cancel</p>
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <button
                                            className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 font-bold rounded-full">
                                            <p className="block overflow-auto py-2 px-4" onClick={handleConfirm}>Confirm</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ModifyProperty;
