import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import SubmitProfilePicture from "../components/SubmitProfilePicture";
import image from "../assets/img/account.png";
import {Link, useNavigate} from "react-router-dom";
import img from "../assets/img/mansion/mansion.webp";
import PropertyCard from "../components/PropertyCard";
import ReservationCardUser from "../components/ReservationCardUser";

const Profile = () => {
    const [activeTab, setActiveTab] = useState(1);

    const [userProfile, setUserProfile] = useState({});
    const [userReservations, setUserReservations] = useState([])
    const [propertyDescription, setPropertyDescription] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function fetchProfile() {
            const response = await fetch(`http://localhost:8000/api/profile/`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const responseData = await response.json()

            console.log("FETCH DATA")
            console.log(responseData)

            // responseData.email = maskEmail(responseData.email)

            setUserProfile(responseData)
        }

        async function fetchReservations() {
            const response = await fetch(`http://localhost:8000/reservations/guest/view/`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const responseData = await response.json()
            console.log(responseData)

            setUserReservations(responseData.results)
        }

        async function fetchProperties() {

        }

        fetchProfile().then(r => {
        })
        fetchReservations().then(r => {
            console.log("All Fetched")
        })
    }, [])

    function maskEmail(email) {
        const [name, domain] = email.split('@')
        const maskedName = `${name.slice(0, 2)}${'*'.repeat(name.length - 2)}`
        return `${maskedName}@${domain}`
    }

    const listings = [
        {
            main_pic: img,
            name: "White House",
            city: "Washington DC",
            province: "Washington",
            price: "1"
        },
        {
            main_pic: img,
            name: "CN Tower",
            city: "Toronto",
            province: "Ontario",
            price: "2"
        },
        {
            main_pic: img,
            name: "Stonehenge",
            city: "Salisbury Plain",
            province: "Wiltshire",
            price: "3"
        },
        {
            main_pic: img,
            name: "Giza Pyramids",
            city: "Giza",
            province: "Greater Cairo",
            price: "4"
        },
    ];

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userID');
        // perform any additional logout tasks
    };
    const handleLogout = () => {
        logout();
        //TODO: Redirect to main page
        navigate('/');
    }

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
                            <h2 className="text-xl font-semibold text-FONT_COLOR_1 mb-1">
                                Profile
                            </h2>
                            <div className="w-20 h-20 bg-BACKGROUND_COLOR_2 relative">
                                <div
                                    className="rounded-full w-20 h-20 z-40"
                                >
                                    <img
                                        src={image}
                                        className="object-fill"
                                        alt="Account Icon"
                                    />
                                    <div
                                        className="flex absolute top-0 left-0 w-20 h-20 z-50 justify-center items-center text-FONT_COLOR_1 bg-BACKGROUND_COLOR_2 opacity-0 hover:opacity-100"
                                    >
                                        <SubmitProfilePicture></SubmitProfilePicture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-FONT_COLOR_2 flex flex-col space-y-4">
                            <div className="flex flex-row mt-4 text-FONT_COLOR_2 h-fit">
                                <div className="flex flex-col space-y-2 w-1/2">
                                    <p>First Name:</p>
                                    <p>Last Name:</p>
                                    <p>Email:</p>
                                </div>
                                <div className="flex flex-col space-y-2 relative">
                                    <p>{userProfile.first_name}</p>
                                    <p>{userProfile.last_name}</p>
                                    <p>{userProfile.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-6 pt-6 items-center justify-center space-x-10">
                            <Link to={`/edit-profile/${userProfile.id}`}>
                                <button
                                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-40 font-medium rounded-full text-xl"
                                >
                                    <p className="block overflow-auto">Edit Information</p>
                                </button>
                            </Link>
                            <button
                                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-40 font-medium rounded-full text-xl"
                            >
                                <p className="block overflow-auto">Edit Password</p>
                            </button>
                            <button
                                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-40 font-medium rounded-full text-xl"
                                onClick={handleLogout}
                            >
                                <p className="block overflow-auto">Logout</p>
                            </button>
                        </div>
                    </div>
                </div>
            )
        },
        // {
        //     title: "Comment",
        //     content: (
        //         <div className="mt-6 relative rounded-2xl bg-BACKGROUND_COLOR_2">
        //             <div
        //                 role="tabpanel"
        //                 id="panel-2"
        //                 className="tab-panel p-6 transition duration-300 flex flex-col space-y-4 divide-y-2"
        //             >
        //                 <h2 className="text-xl font-semibold text-FONT_COLOR_1">
        //                     My Comments
        //                 </h2>
        //                 <p className="mt-4 text-FONT_COLOR_2">No Comments</p>
        //             </div>
        //         </div>
        //     )
        // },
        {
            title: "Reservations",
            content: (
                <div className="mt-6 relative rounded-2xl bg-BACKGROUND_COLOR_2">
                    <div
                        role="tabpanel"
                        id="panel-3"
                        className="tab-panel p-6 transition duration-300 flex flex-col space-y-4"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-FONT_COLOR_1">
                                My Reservations
                            </h2>
                            <Link to={"/"}>
                                <button
                                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-20 rounded-full font-bold"
                                >
                                    + Add
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center">
                            {userReservations.map((reservation, index) => {
                                console.log("hi")
                                return <ReservationCardUser reservation={reservation} key={index}/>
                            })}
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Listings",
            content: (
                <div
                    role="tabpanel"
                    id="panel-3"
                    className="tab-panel p-6 transition duration-300 flex flex-col space-y-4"
                >
                    <h2 className="text-xl font-semibold text-FONT_COLOR_1">
                        My Listings
                    </h2>
                    {listings.length > 0 ? (
                        <>
                            <Link to={"/listing"}>
                                <button
                                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-20 rounded-full font-bold"
                                >
                                    <div className="block overflow-auto">+ Add</div>
                                </button>
                            </Link>
                            <main className="flex lg:mt-4 py-3 mx-auto w-full">
                                <div className="grid xl:grid-cols-2 gap-4 w-full">
                                    {listings.map(listing => (
                                        <PropertyCard key={listing.name} property={listing} url={"/manage-property"}
                                                      color={1}/>
                                    ))}
                                </div>
                            </main>
                        </>
                    ) : (
                        <div>
                            <p className="mt-4 text-FONT_COLOR_2">
                                This tab is for properties owners.
                                <Link className="text-ACCENT_COLOR" to={"/listing"}> Create your listing today to become
                                    an
                                    owner!</Link>
                            </p>
                        </div>
                    )}
                </div>

            )
        }
    ];

    return (
        <>
            <NavBar></NavBar>
            <div className="mx-auto mt-10 w-full sm:px-0">
                <div className="md:w-4/6 sm:mx-auto">
                    <div
                        role="tablist"
                        aria-label="tabs"
                        className="relative mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-2xl bg-BACKGROUND_COLOR_2 overflow-hidden shadow-2xl shadow-900/20 transition"
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
        </>
    );
};

export default Profile;