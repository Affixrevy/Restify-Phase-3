import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import SubmitProfilePicture from "../components/SubmitProfilePicture";
import image from "../assets/img/account.png";
import {json, Link, useNavigate} from "react-router-dom";
import img from "../assets/img/mansion/mansion.webp";
import PropertyCard from "../components/PropertyCard";
import ReservationCardUser from "../components/ReservationCardUser";
import InfiniteScroll from "react-infinite-scroll-component";
import ReservationCardOwner from "../components/ReservationCardOwner";

const Profile = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [userProfile, setUserProfile] = useState({});
    const [userReservations, setUserReservations] = useState([]);
    const [userListings, setUserListings] = useState([]);
    const [propertyDescription, setPropertyDescription] = useState([])

    // Variables for loading the listings
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token');

        if (token === null) {
            navigate("/")
            return
        }

        async function confirmToken() {

            const data = {
                token: token
            }

            const response = await fetch(`http://localhost:8000/api/token/verify/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (response.status === 401) {
                console.log("bad bad bad")
                const refresh = localStorage.getItem('refresh');

                if (refresh === null) {
                    navigate("/")
                    return
                }

                const refreshData = {refresh: refresh}

                const refreshResponse = await fetch(`http://localhost:8000/api/token/refresh/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(refreshData)
                })

                if (refreshResponse.status === 401) {
                    handleLogout();
                    navigate("/login")
                } else {
                    const responseJson = await refreshResponse.json();

                    const token = responseJson.access;
                    localStorage.setItem('token', token)

                    console.log("Refresh still valid")
                    console.log(responseJson)
                }
            }

            // console.log(await response)
        }

        async function fetchProfile() {
            const token = localStorage.getItem('token');

            const response = await fetch(`http://localhost:8000/api/profile/`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const responseData = await response.json()

            console.log("FETCH DATA")
            console.log(responseData)

            setUserProfile(responseData)
        }

        async function fetchReservations() {
            const token = localStorage.getItem('token');

            const response = await fetch(`http://localhost:8000/reservations/guest/view/`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const responseData = await response.json()
            console.log(responseData)

            setUserReservations(responseData.results)
        }

        async function fetchListings() {
            const token = localStorage.getItem('token');

            const response = await fetch(`http://localhost:8000/reservations/host/view/`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const responseData = await response.json()
            console.log(responseData)

            setUserListings(responseData.results)
        }

        confirmToken().then(r => {
            const token = localStorage.getItem('token');
            fetchProfile().then(r => {
                console.log("Fetched all user information")
            })
            fetchReservations().then(r => {
                console.log("Fetched all reservations")
            })
            fetchListings().then(r => {
                console.log("All Fetched all listings")
            })
            fetchData(1, userProfile.id).then(r => {
                console.log("Fetched all data")
            });
        })

    }, [userProfile.id]);

    const fetchData = async (page, userId) => {
        try {
            const response = await fetch(`http://localhost:8000/properties/view/?page=${page}`);
            const data = await response.json();
            if (data.results && Array.isArray(data.results)) {
                const userProperties = data.results.filter(property => property.owner === userId);
                setItems(prevItems => [...prevItems, ...userProperties]);
                setHasMore(data.next !== null);
            } else {
                setHasMore(false);
                console.error('Unexpected data format:', data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    function maskEmail(email) {
        const [name, domain] = email.split('@')
        const maskedName = `${name.slice(0, 2)}${'*'.repeat(name.length - 2)}`
        return `${maskedName}@${domain}`
    }


    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userID');
        localStorage.removeItem('refresh');
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
        {
            title: "Reservations",
            content: (
                <div className="mt-6 relative rounded-2xl bg-BACKGROUND_COLOR_2">
                    <div
                        role="tabpanel"
                        id="panel-2"
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
                                return <ReservationCardUser reservation={reservation}/>
                            })}
                        </div>
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
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-FONT_COLOR_1">
                                Upcoming Bookings
                            </h2>
                        </div>
                        {userListings.length > 0 ? (
                            <div className="items-center">
                                {userListings.map((listing, index) => {
                                    return <ReservationCardOwner listing={listing}/>
                                })}
                            </div>
                        ) : (
                            <div>
                                <p className="mt-4 text-FONT_COLOR_2">
                                    This tab is for properties owners.
                                    <Link className="text-ACCENT_COLOR" to={"/listing"}> Create your listing today to
                                        become
                                        an
                                        owner!</Link>
                                </p>
                            </div>
                        )}
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
                   <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-FONT_COLOR_1">
                                My Listings
                            </h2>
                            <Link to={"/listing"}>
                                <button
                                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-20 rounded-full font-bold"
                                >
                                    + Add
                                </button>
                            </Link>
                        </div>
                    {items.length > 0 ? (
                        <InfiniteScroll
                            next={() => fetchData(items.length / 8 + 1, userProfile.id)}
                            hasMore={hasMore}
                            loader={<h4 className="text-FONT_COLOR_2"></h4>}
                            dataLength={items.length}
                            scrollThreshold={0.9}
                            scrollableTarget="window"
                            endMessage={<p className="mt-2 p-2 text-FONT_COLOR_2 text-sm text-center justify-center">
                                No more listings
                            </p>}
                        >
                            <div className="w-full space-y-4">
                                {items.map((item, index) => {
                                    return <PropertyCard key={index} property={item} url={`/manage-property/${item.id}`}
                                                         color={1}></PropertyCard>
                                })}
                            </div>
                        </InfiniteScroll>
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
        </>
    );
};

export default Profile;