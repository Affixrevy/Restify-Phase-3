import React from 'react';
import NavBar from "../components/NavBar";
import SubmitFile from "../components/SubmitFile";
import SetHoliday from "../components/SetHoliday";

const ListingAddition = () => {
    return (
        <>
            <NavBar></NavBar>
            <main className="flex bg-BACKGROUND_COLOR_1 flex-col items-center">
                <div className="p-6 text-FONT_COLOR_1 w-screen md:w-5/6">
                    <div className="BACKGROUND_COLOR_2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="text-2xl font-bold py-2">
                            Customize your property
                        </div>
                        <div className="relative mb-4">
                            <div className="flex justify-center items-center h-20 space-x-10">
                                <SetHoliday text="Add Holiday Price"></SetHoliday>
                                <SubmitFile multiple={1} text="Add More Pictures" title="Submit multiple images for the listing"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <button
                                className="bg-ACCENT_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 font-bold rounded-full"
                            >
                                <p className="block overflow-auto py-2 px-4">Confirm</p>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ListingAddition;