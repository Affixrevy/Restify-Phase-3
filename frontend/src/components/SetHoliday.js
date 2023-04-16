import {useState} from 'react';

function SetHoliday(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async () => {
        const data = {
            startDate,
            endDate,
            numberOfGuests
        };

        // TODO: this might not be correct but I set it up in advance for Arthur to call the enpoint

        try {
            const response = await fetch('/backend/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <button
                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-44 font-bold rounded-full block overflow-auto py-2 px-4"
                onClick={toggleModal}>
                {props.text}
            </button>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-10 modal">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-lg font-medium mb-4 text-gray-700">Set Date and Number Fields</h2>
                        <div className="mb-4">
                            <label htmlFor="start_date" className="block text-gray-700 font-medium mb-2">
                                Start Date
                            </label>
                            <input
                                type="date"
                                id="start_date"
                                className="block text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="end_date" className="block text-gray-700 font-medium mb-2">
                                End Date
                            </label>
                            <input
                                type="date"
                                id="end_date"
                                className="block text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="number_of_guests" className="block text-gray-700 font-medium mb-2">
                                Number of Guests
                            </label>
                            <input
                                type="number"
                                id="number_of_guests"
                                className="block text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                value={numberOfGuests}
                                onChange={(e) => setNumberOfGuests(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button
                                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-24 font-bold rounded-full block overflow-auto py-2 px-4"
                                onClick={toggleModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-ACCENT_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-24 font-bold rounded-full block overflow-auto py-2 px-4"
                                onClick={handleSubmit}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SetHoliday;
