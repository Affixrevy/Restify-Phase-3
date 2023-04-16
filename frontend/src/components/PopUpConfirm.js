import React from 'react';
import { useState } from 'react';

const PopUpConfirm = (props) => {
    const [status, setStatus] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const title = props.title;
    const text = props.text;

    const handleSubmit = () => {
        if (status === 1) {
            setStatus(2);
        }
        setShowModal(false);
        console.log(status);
    };

    return (
        <div className="relative">
            <button
                className="bg-BUTTON_COLOR hover:bg-ACCENT_COLOR text-white font-bold py-2 px-4 rounded mb-2 md:w-36"
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
                        <h2 className="text-xl mb-4">{title}</h2>
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