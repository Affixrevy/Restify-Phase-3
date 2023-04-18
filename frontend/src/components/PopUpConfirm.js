import React from 'react';
import { useState } from 'react';

const PopUpConfirm = (props) => {
    const [status, setStatus] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const title = props.title;
    const text = props.text;

    function sendNotif(type) {
        const token = localStorage.getItem('token');

        const user = fetch(`http://localhost:8000/api/profile/`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
        
        const sender = user.then(response => {
            return response.json()
        }).then(data => {
            return data
        });

        const reservation = fetch(`http://localhost:8000/reservations/select/${props.id}/`);

        var rDdata = reservation.then(response => {
            return response.json()
        }).then(data => {
            console.log(data[0])
            return data[0]
        });

        const formData = new FormData();

        Promise.all([sender, rDdata]).then((values => {
            let sender = values[0];
            let rData = values[1];

            console.log(sender.id);
            console.log(rData.user);

            formData.append("sender_type", 7);
            formData.append("sender_id", sender.id);
            formData.append("receiver_id", rData.user);
            formData.append("reservation", false);
            formData.append("concellation", false);
            formData.append("comment", true);

            if (type === 1) {
                formData.append("content", sender.first_name + " " + sender.last_name + " has accepted your reservation request.");
            }
            if (type === 0) {
                formData.append("content", sender.first_name + " " + sender.last_name + " has denied your reservation request.");
            }

            fetch("http://localhost:8000/notifications/create/", {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body: formData
            }).then(response => {
                return response.json()
            }).then(data => {
                console.log(data)
            });
        }));
    }

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

        sendNotif(1)
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

        sendNotif(0)
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

        const jsonData = await response.json()
        console.log(jsonData)
    }

    async function handleCancel() {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:8000/reservations/${props.id}/cancel/`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        console.log(response)
    }

    const handleSubmit = () => {
        if (props.text === "Accept") {
            handleAccept().then();
        } else if (props.text === "Deny") {
            handleDeny().then();
        } else if (props.text === "Terminate") {
            handleTerminate().then();
        } else if (props.text === "Accept Cancel") {
            handleCancelAccept().then();
        } else if (props.text === "Deny Cancel") {
            handleCancelDeny().then();
        } else if (props.text === "Cancel") {
            handleCancel().then();
        }

        setShowModal(false);
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
                    className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
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