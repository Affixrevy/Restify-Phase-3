import React from 'react';
import { useState } from 'react';

const PopUpConfirm = (props) => {
    const [status, setStatus] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const title = props.title;
    const text = props.text;

    async function handleAccept() {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:8000/reservations/${props.id}/update/`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "confirmed"
            })
        })
    }

    async function handleDeny() {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:8000/reservations/${props.id}/update/`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "denied"
            })
        })

        const responseData = await response.json()
        console.log(responseData)
    }

    async function handleTerminate() {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:8000/reservations/${props.id}/terminate/`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
    }

    async function handleCancelAccept() {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:8000/reservations/${props.id}/confirmcancel/`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
    }

    async function handleCancelDeny() {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:8000/reservations/${props.id}/deny-cancel/`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
    }

    const handleSubmit = () => {
        if (props.text === "Accept") {
            handleAccept();
        } else if (props.text === "Deny") {
            handleDeny();
        } else if (props.text === "Terminate") {
            // This works
            handleTerminate()
        } else if (props.text === "Accept Cancel") {
            handleCancelAccept();
        } else if (props.text === "Deny Cancel") {
            handleCancelDeny();
        }

        setShowModal(false);
        props.setRefresh(true);
        console.log(status);
    };

    return (
        <div className="relative">
            <button
                className="bg-BUTTON_COLOR hover:bg-ACCENT_COLOR text-white font-bold py-2 px-4 rounded mb-2 md:w-36 z-10"
                onClick={() => setShowModal(true)}
            >
                {text}
            </button>

            {showModal && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-60"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-white p-8 rounded shadow-lg w-80"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl mb-4 text-black">{title}</h2>
                        <div className="flex justify-between space-x-3">
                            <button
                                className="bg-BUTTON_COLOR hover:bg-ACCENT_COLOR text-white font-bold py-2 px-4 rounded mb-2 md:w-36"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-BUTTON_COLOR hover:bg-ACCENT_COLOR text-white font-bold py-2 px-4 rounded mb-2 md:w-36"
                                onClick={handleSubmit}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopUpConfirm;