import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import CommentBox from "../components/CommentBox";
import {useParams} from "react-router-dom";

const ViewGuest = () => {
    const { id } = useParams();
    const username = "Harry Duong";

    const [showCommentBox, setShowCommentBox] = useState(false);
    const [commentContent, setCommentContent] = useState('');

    const [comments, setComments] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch(`http://localhost:8000/comments/user/${id}/`)
            .then(response => response.json())
            .then(jsonData => setComments(jsonData))
            .catch();

        const userID = localStorage.getItem('userID')
    }, [id]);

    async function createComment() {
        const url = 'http://localhost:8000/comments/create/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                subject_type: "user",
                subject_id: id,
                reservation_id: 2,
                content: commentContent
            })
        };

        try {
            const response = await fetch(url, options);
        } catch (error) {
            console.error(error);
        }
    }

    const handleComment = () => {
        if (commentContent.trim() === '') return;
        setShowCommentBox(false);
        createComment().then();
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="flex flex-col items-center justify-center py-10">
                <div className="container lg:w-4/6 rounded-2xl bg-BACKGROUND_COLOR_2">
                    <div className="flex flex-col justify-between items-left text-left p-4 leading-normal">
                        <div className="grid grid-cols-5 flex-row w-100">
                            <div className="xl:col-span-4 col-span-5">
                                <h5 className="mb-4 text-4xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                                    Comments
                                </h5>
                            </div>
                                <button
                                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-30 font-bold py-2 px-4 mb-4 rounded-full col-span-1"
                                    onClick={() => setShowCommentBox(!showCommentBox)}
                                >
                                    + Add
                                </button>
                            <div className="col-span-5">
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
                            <CommentBox key={index} thread={comment} id={id} user={1}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewGuest;