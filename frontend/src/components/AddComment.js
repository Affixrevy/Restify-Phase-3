import { useState } from 'react';

function AddComment() {
    const [isOpen, setIsOpen] = useState(false);
    const [commentContent, setCommentContent] = useState('');

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async () => {
        const data = {
            commentContent: commentContent
        };

        // TODO: this might not be correct but I set it up in advance for Arthur to call the endpoint

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
                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold py-2 px-4 my-5 rounded-full col-span-1"
                onClick={toggleModal}>
                Add Comment
            </button>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-10 modal p-6 w-96">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-lg font-medium mb-4 text-gray-700">Add a comment</h2>
                        <div className="mb-4">
                            <label htmlFor="number_of_guests" className="block text-gray-700 font-medium mb-2">
                                Content
                            </label>
                            <textarea
                                id="number_of_guests"
                                className="block text-gray-700 w-full border-ACCENT_COLOR rounded-md shadow-sm focus:ring focus:ring-ACCENT_COLOR focus:ring-opacity-50"
                                value={commentContent}
                                onChange={(e) => setCommentContent(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button
                                className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-24 font-bold rounded-full block overflow-auto py-2 px-4"
                                onClick={toggleModal}
                            >
                                Cancel
                            </button>
                            <button className="bg-ACCENT_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-24 font-bold rounded-full block overflow-auto py-2 px-4" onClick={handleSubmit}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddComment;
