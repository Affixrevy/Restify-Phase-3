import { useState } from "react";
import image from "../assets/img/notifications_white_48dp.svg";
import {Link} from "react-router-dom";

function NotificationDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState([])

    function displayNotifs() {
        const token = localStorage.getItem('token');

        const user = fetch(`http://localhost:8000/api/profile/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        
        user.then(response => {
            return response.json()
        }).then(async data => {
            var id = data.id;
            console.log(id);
            return fetch(`http://localhost:8000/notifications/${id}/`).then(response => {
                return response.json()
            }).then(data => {
                console.log(data)
                setNotifications(data)
            });
        })
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        displayNotifs();
    };

    const deleteNotif = (id) => {
        console.log(id);
        console.log(isOpen);
        fetch('http://localhost:8000/notifications/delete/' + id + '/', {method: 'DELETE'});
    }

    const clearAllNotifications = () => {
        // your logic for clearing all notifications here
        if (notifications !== []) {
            fetch('http://localhost:8000/notifications/delete/all/' + notifications[0].id + '/', {method: 'DELETE'});
        }
    };

    return (
        <div className="relative inline-block mt-2 z-50">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center items-center text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-expanded="false"
            >
                <img
                    src={image}
                    alt="Account Icon"
                />
                <span className="sr-only">Open notification dropdown</span>
            </button>

            {isOpen && (
                // TODO: change this so that it redirect the user to the correct page given by the notification
                <div className="absolute z-10 right-0 mt-2 w-80 dark:bg-gray-800 rounded-md shadow-lg overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-BACKGROUND_COLOR_1">
                        <h3 className="text-lg font-medium text-FONT_COLOR_1 dark:text-white text-center">
                            Notifications
                        </h3>
                    </div>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700 bg-BACKGROUND_COLOR_1">
                        {notifications.map((notification) => (
                            <li key={notification.id} className="px-4 py-2 bg-BACKGROUND_COLOR_1">
                                <button className="font-semibold text-FONT_COLOR_1" onClick={deleteNotif(notification.id)}>{`${notification.content}`}</button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center bg-BACKGROUND_COLOR_1">
                        <div className="px-4 py-2 bg-BACKGROUND_COLOR_1">
                            <button
                                onClick={clearAllNotifications}
                                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold py-2 px-4 rounded-full"
                            >
                                Clear notifications
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotificationDropdown;
