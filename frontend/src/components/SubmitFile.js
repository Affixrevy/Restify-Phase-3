import React from 'react';
import { useState } from 'react';

const SubmitFile = (props) => {
    const multiple = props.multiple;
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState(null);

    const handleButtonClick = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(file);
        // TODO: Handle file upload logic here
        handleCloseModal();
    };

    return (
        <div>
            <button
                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-44 font-bold rounded-full block overflow-auto py-2 px-4"
                onClick={handleButtonClick}>
                {props.text}
            </button>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 flex items-center justify-center modal">
                    <div className="bg-white p-8 rounded-md">
                        <h2 className="text-lg font-bold mb-4 text-black">{props.title}</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4 text-black">
                                {multiple > 0 ? (
                                    <input type="file" multiple onChange={handleFileChange} />
                                ) : (
                                    <input type="file" onChange={handleFileChange} />
                                )}
                            </div>
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <button
                                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold rounded-full block overflow-auto py-2 px-4"
                                    onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button
                                    className="bg-ACCENT_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold rounded-full block overflow-auto py-2 px-4"
                                    type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubmitFile;