import React, {useEffect} from 'react';
import NavBar from "../components/NavBar";
import {Link, useNavigate, useParams} from "react-router-dom";

import {useState} from "react";
import {wait} from "@testing-library/user-event/dist/utils";

const EditProfile = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    const isLoggedIn = () => {
        const token = localStorage.getItem('token');
        return token !== null;
    };

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate('/');
        }
    }, [navigate]);

    const handleSaveClick = async (event) => {
        const token = localStorage.getItem('token');

        console.log(id)

        event.preventDefault(); // Prevent the default form submission behavior

        const data = {};
        if (firstName) data.first_name = firstName;
        if (lastName) data.last_name = lastName;
        if (email) data.email = email;

        // Check if at least one field is filled
        if (Object.keys(data).length === 0) {
            alert('Please fill in at least one field');
            return;
        }

        // Send the data to the server
        try {
            const response = await fetch(`http://localhost:8000/api/update/profile/${id}`, {
                method: 'PUT',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                console.log(response)
                throw new Error('Failed to save the profile data');
            }

            const result = await response.json();
            console.log('Profile data saved successfully:', result);

            // Redirect to the profile page or show a success message
            navigate("/profile")
        } catch (error) {
            console.error('Error saving profile data:', error);
            // Show an error message to the user
            // ...
        }
    };


    return (
        <div className="h-screen bg-BACKGROUND_COLOR_1">
            <NavBar></NavBar>
            <div className="flex-col items-center flex">
                <div className="p-6 text-FONT_COLOR_1 w-screen md:w-5/6">
                    <form className="BACKGROUND_COLOR_2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="text-2xl font-bold py-2">
                            Edit Profile
                        </div>
                        <div className="relative mb-4">
                            <input type="text" id="first_name"
                                   className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                   placeholder=" "
                                   value={firstName}
                                   onChange={(event) => setFirstName(event.target.value)}/>
                            <label htmlFor="first_name"
                                   className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">First
                                Name</label>
                        </div>
                        <div className="relative mb-4">
                            <input type="text" id="last_name"
                                   className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                   placeholder=" "
                                   value={lastName}
                                   onChange={(event) => setLastName(event.target.value)}/>
                            <label htmlFor="last_name"
                                   className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Last
                                Name</label>
                        </div>
                        <div className="relative mb-4">
                            <input type="tel" id="email"
                                   className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                   placeholder=" "
                                   value={email}
                                   onChange={(event) => setEmail(event.target.value)}/>
                            <label htmlFor="email"
                                   className="absolute text-sm text-gray-300 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                        </div>
                        <div className="flex flex-row justify-center space-x-4">
                            <div className="flex flex-col items-start">
                                <Link to={"/profile"}>
                                    <button
                                        className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 font-bold rounded-full">
                                        <p
                                            className="block overflow-auto py-2 px-4">Cancel</p>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col items-start">
                                <button
                                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-32 font-bold rounded-full"
                                    onClick={handleSaveClick}>
                                    <p className="block overflow-auto py-2 px-4">Save</p>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default EditProfile;