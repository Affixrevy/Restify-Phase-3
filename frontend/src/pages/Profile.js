import React, {useState} from 'react';
import NavBar from "../components/NavBar";
import image from "../assets/img/account.png";
import PropertyCard from "../components/PropertyCard";
import {Link} from "react-router-dom";

const Profile = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const tabPanels = [
        {
            title: "Profile",
            content: (
                <div className="mt-6 relative rounded-2xl bg-BACKGROUND_COLOR_2">
                    <div
                        role="tabpanel"
                        id="panel-1"
                        className="tab-panel p-6 transition duration-300 flex flex-col space-y-4 divide-y-2"
                    >
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-xl font-semibold text-FONT_COLOR_1 mb-2">
                                Profile
                            </h2>
                            <div className="w-20 h-20 bg-BACKGROUND_COLOR_2 relative">
                                <div
                                    className="rounded-full w-20 h-20 pt-3 z-40"
                                >
                                    <img
                                        src={image}
                                        className="object-fill"
                                        alt="Account Icon"
                                    />
                                    <div
                                        className="flex absolute top-0 left-0 w-20 h-20 z-50 justify-center items-center text-FONT_COLOR_1 bg-BACKGROUND_COLOR_2 opacity-0 hover:transition-opacity hover:opacity-50"
                                    >
                                        <div>Edit</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row mt-4 text-FONT_COLOR_2 h-fit">
                                <div className="flex flex-col space-y-2 w-1/2">
                                    <p>First Name:</p>
                                    <p>Last Name:</p>
                                    <p>Date of Birth:</p>
                                </div>
                                <div className="flex flex-col space-y-2 relative">
                                    <p>Potato</p>
                                    <p>Tomato</p>
                                    <p>2002-04-13</p>
                                </div>
                            </div>
                            <button
                                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-20 font-bold rounded-full">
                                <p className="block overflow-auto">Edit</p>
                            </button>
                        </div>
                        <div className="text-FONT_COLOR_2 flex flex-col space-y-4">
                            <div className="flex flex-row mt-4 text-FONT_COLOR_2 h-fit">
                                <div className="flex flex-col space-y-2 w-1/2">
                                    <p>Email:</p>
                                    <button
                                        className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-20 font-bold rounded-full">
                                        <p className="block overflow-auto">Edit</p>
                                    </button>
                                    <p>Password:</p>
                                    <button
                                        className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-20 font-bold rounded-full">
                                        <p className="block overflow-auto">Edit</p>
                                    </button>
                                </div>
                                <div className="flex flex-col space-y-2 relative">
                                    <p>t***o@mayo.com</p>
                                    <button
                                        className="opacity-0 bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-20 font-bold rounded-full cursor-default"
                                    >
                                        Edit
                                    </button>
                                    <p>*****</p>
                                    <button
                                        className="opacity-0 bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-20 font-bold rounded-full cursor-default">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-6 pt-6 items-center justify-center">
                            <button
                                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 font-bold rounded-full text-2xl"
                            >
                                <p className="block overflow-auto">Logout</p>
                            </button>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Comment",
            content: (
                <div className="mt-6 relative rounded-2xl bg-BACKGROUND_COLOR_2">
                    <div
                        role="tabpanel"
                        id="panel-2"
                        className="tab-panel p-6 transition duration-300 flex flex-col space-y-4 divide-y-2"
                    >
                        <h2 className="text-xl font-semibold text-FONT_COLOR_1">
                            My Comments
                        </h2>
                        <p className="mt-4 text-FONT_COLOR_2">No Comments</p>
                    </div>
                </div>
            )
        },
        {
            title: "Bookings",
            content: (
                <div className="mt-6 relative rounded-2xl bg-BACKGROUND_COLOR_2">
                    <div
                        role="tabpanel"
                        id="panel-3"
                        className="tab-panel p-6 transition duration-300 flex flex-col space-y-4"
                    >
                        <h2 className="text-xl font-semibold text-FONT_COLOR_1">
                            My Bookings
                        </h2>
                        <button
                            className=" bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 rounded-full font-bold  mt-4"
                        >
                            Add Booking
                        </button>
                        <main className="flex lg:mt-4 py-5 mx-auto w-full">
                            <div className="grid lg:grid-cols-2 gap-4 w-full">
                                <PropertyCard></PropertyCard>
                                <PropertyCard></PropertyCard>
                                <PropertyCard></PropertyCard>
                                <PropertyCard></PropertyCard>
                            </div>
                        </main>
                    </div>
                </div>
            )
        },
        {
            title: "Listings",
            content: (
                <div
                    role="tabpanel"
                    id="panel-4"
                    className="tab-panel p-6 transition duration-300 flex flex-col space-y-4"
                >
                    <h2 className="text-xl font-semibold text-FONT_COLOR_1">
                        My Listings
                    </h2>
                    <p className="mt-4 text-FONT_COLOR_2">
                        This tab is for owners of listings.
                        <Link className="text-ACCENT_COLOR" to={"/"}> Create your listing today to become an
                            owner!</Link>
                    </p>
                    <button
                        className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 font-bold rounded-full mt-4"
                    >
                        <div className="block overflow-auto">Add Listing</div>
                    </button>
                    <main className="flex lg:mt-4 py-5 mx-auto w-full">
                        <div className="grid lg:grid-cols-2 gap-4 w-full">
                            <PropertyCard></PropertyCard>
                            <PropertyCard></PropertyCard>
                            <PropertyCard></PropertyCard>
                            <PropertyCard></PropertyCard>
                        </div>
                    </main>
                </div>
            )
        }
    ];

    return (
        <body className="h-screen bg-BACKGROUND_COLOR_1">
        <NavBar></NavBar>
        <div className="mx-auto mt-10 w-full sm:px-0">
            <div className="md:w-4/6 sm:mx-auto">
                <div
                    role="tablist"
                    aria-label="tabs"
                    className="relative mx-auto h-12 grid grid-cols-4 items-center px-[3px] rounded-2xl bg-BACKGROUND_COLOR_2 overflow-hidden shadow-2xl shadow-900/20 transition"
                >
                    {tabPanels.map((tabPanel, index) => (
                        <button
                            key={index}
                            role="tab"
                            aria-selected={activeTab === index + 1 ? "true" : "false"}
                            aria-controls={`panel-${index + 1}`}
                            id={`tab-${index + 1}`}
                            tabIndex={activeTab === index + 1 ? "0" : "-1"}
                            className={`relative block h-10 px-6 tab rounded-2xl ${activeTab === index + 1 ? "text-FONT_COLOR_1" : "text-FONT_COLOR_2 hover:text-FONT_COLOR_1 cursor-pointer"}`}
                            onClick={() => handleTabClick(index + 1)}
                        >
                            <span>{tabPanel.title}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
        <div className="mt-6 md:w-4/6 sm:mx-auto rounded-2xl bg-BACKGROUND_COLOR_2">
            {tabPanels.map((tabPanel, index) => (
                <div
                    key={index}
                    role="tabpanel"
                    id={`panel-${index + 1}`}
                    className={`tab-panel transition duration-300 ${activeTab === index + 1 ? "block" : "hidden"}`}
                >
                    {tabPanel.content}
                </div>
            ))}
        </div>
        </body>
    );
};

export default Profile;