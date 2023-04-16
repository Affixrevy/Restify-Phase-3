import React, { useState } from 'react';
import ImageGallery from "../components/ImageGallery";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

import CommentBox from "../components/CommentBox";
import ReservationCardOwner from "../components/ReservationCardOwner";

const ManageProperty = () => {
    const { id } = useParams();

    const username = "Harry Duong";
    const username2 = 'Harry Potter';
    const content_special = "Avada kedavra. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ad nobis\n" +
        "                cupiditate veniam inventore commodi eligendi illo, perspiciatis\n" +
        "                accusantium consectetur distinctio id culpa minima, in officia dolorum\n" +
        "                itaque repellendus? Rerum."

    const [comments, setComments] = useState([
        { username: username2, content: content_special }
    ]);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [commentContent, setCommentContent] = useState('');

    const handleComment = () => {
        if (commentContent.trim() === '') return;
        setComments([...comments, { username: username, content: commentContent }]);
        setCommentContent('');
        setShowCommentBox(false);
    };

    return (
        <div className="h-screen bg-BACKGROUND_COLOR_1">
            <NavBar />
            <ImageGallery id={id} />

            <div className="flex flex-col items-center justify-center pb-10">
                <div className="container lg:w-4/6 rounded-2xl bg-BACKGROUND_COLOR_2">
                    <div className="flex flex-col justify-between items-left text-left p-4 leading-normal">
                        <div className="grid grid-cols-5 flex-row w-100">
                            <div className="xl:col-span-4 col-span-5">
                                <h5 className="mb-4 text-5xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                                    Comments
                                </h5>
                            </div>
                            <div className="xl:col-span-1 col-span-5">
                                <button
                                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold py-2 px-4 mb-4 rounded-full col-span-1"
                                    onClick={() => setShowCommentBox(!showCommentBox)}
                                >
                                    Comment
                                </button>
                                {showCommentBox && (
                                    <div className="mt-2">
                                        <textarea
                                            className="w-full p-2 text-FONT_COLOR_2 bg-TEXT_FIELD_COLOR border-2 border-BORDER_COLOR_1 rounded"
                                            value={commentContent}
                                            onChange={(e) => setCommentContent(e.target.value)}
                                            placeholder="Write your comment here..."
                                        />
                                        <button
                                            className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold py-2 px-4 my-5 rounded-full col-span-1"
                                            onClick={handleComment}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        {comments.map((comment, index) => (
                            <CommentBox key={index} username={comment.username} content={comment.content} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pb-10">
                <div className="container lg:w-4/6 rounded-2xl bg-BACKGROUND_COLOR_2">
                    <div className="flex flex-col justify-between items-left text-left p-4 leading-normal">
                        <div className="grid grid-cols-6 flex-row w-full">
                            <div className="col-span-6 space-y-3">
                                <h5 className="mb-4 text-5xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                                    Reservations
                                </h5>
                                <div className="xl:grid grid-cols-2 gap-2">
                                    <ReservationCardOwner chosen={3}></ReservationCardOwner>
                                    <ReservationCardOwner chosen={3}></ReservationCardOwner>
                                    <ReservationCardOwner chosen={2}></ReservationCardOwner>
                                    <ReservationCardOwner chosen={3}></ReservationCardOwner>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProperty;