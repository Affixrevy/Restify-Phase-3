import React, { useState } from 'react';

const CommentBox = (props) => {
    // Variables passed in from the previous page
    const thread = props.thread;
    const id = props.id;
    const user = props.user;
    const rootComment = thread.root_comment;
    const ownerReply = thread.owner_reply;
    const userReply = thread.user_reply;

    // Variables to handle the reply function of the component
    const [replies, setReplies] = useState([]);
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyContent, setReplyContent] = useState('');

    // Name of the owner
    const [ownerFirst, setOwnerFirst] = useState('');
    const [ownerLast, setOwnerLast] = useState('');

    async function fetchOwner() {
        const response = await fetch(`http://localhost:8000/api/users/${ownerReply.comment_author}/`);
        const responseData = await response.json();
        setOwnerFirst(responseData.first_name);
        setOwnerLast(responseData.last_name);
    }

    //Name of the user
    const [userFirst, setUserFirst] = useState('');
    const [userLast, setUserLast] = useState('');

    async function fetchUser() {
        const response = await fetch(`http://localhost:8000/api/users/${rootComment.comment_author}/`);
        const responseData = await response.json();
        setUserFirst(responseData.first_name);
        setUserLast(responseData.last_name);
    }

    // handle the different cases for thread
    if (thread.state < 2) {
        fetchUser().then();
    } else if (thread.state >= 2) {
        fetchOwner().then();
        fetchUser().then();
    }

    // Getting the current logged-in user
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');

    async function createComment(content) {
        const url = 'http://localhost:8000/comments/reply/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                thread_id: thread.id,
                content: replyContent
            })
        };

        try {
            const response = await fetch(url, options);

            const responseJson = await response.json();

            console.log(responseJson)
        } catch (error) {
            console.error(error);
        }
    }

    function sendNotif() {
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

        const formData = new FormData();

        Promise.all([sender]).then((values => {
            let sender = values[0];

            console.log(sender.id);

            formData.append("sender_type", 7);
            formData.append("sender_id", sender.id);
            formData.append("receiver_id", rootComment.comment_author);
            formData.append("reservation", false);
            formData.append("concellation", false);
            formData.append("comment", true);
            formData.append("content", sender.first_name + " " + sender.last_name + " replied to your comment.");

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

    const handleReply = () => {
        if (replyContent.trim() === '') return;
        setShowReplyBox(false);
        createComment().then();
        sendNotif();
    };

    return (
        <div className="rounded-2xl bg-STROKE_COLOR justify-center items-center mb-4">
            <div className="flex justify-between items-center">
                <h2 className="mb-2 ml-3 mt-2 text-xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                    {userFirst} {userLast}
                </h2>
                {/*{(thread.state !== 3) && ((userID === rootComment.comment_author) || (userID === userReply.comment_author)) && (*/}
                {/*)}*/}
                {(user === 0) && (
                    <button
                        className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 font-bold py-1 px-4 rounded mr-3 mt-2"
                        onClick={() => setShowReplyBox(!showReplyBox)}
                    >
                        Reply
                    </button>
                )}
            </div>
            <div className="place-self-center px-3">
            {showReplyBox && (
                <div className="ml-3 mb-3">
                    <textarea
                        className="w-full p-2 text-FONT_COLOR_2 bg-TEXT_FIELD_COLOR border-2 border-BORDER_COLOR_1 rounded"
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Write your reply here..."
                    />
                    <button
                        className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 font-bold py-1 px-4 rounded mt-2"
                        onClick={handleReply}
                    >
                        Submit
                    </button>
                </div>
            )}
                <hr className="my-3 border-0 border-BORDER_COLOR_1 border-solid border-b-2"/>
            </div>
            <p className="mb-3 ml-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_2">
                {rootComment.content}
            </p>
            {replies.map((reply, index) => (
                <>
                    {(userID === rootComment.comment_author) && (
                        <>
                            <div className="rounded-2xl bg-STROKE_COLOR justify-center items-center mb-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="mb-2 ml-3 mt-2 text-xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                                        {userFirst} {userLast}
                                    </h2>
                                </div>
                                <div className="place-self-center px-3">
                                    <hr className="my-3 border-0 border-BORDER_COLOR_1 border-solid border-b-2"/>
                                </div>
                                <p className="mb-3 ml-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_2">
                                    {reply}
                                </p>
                            </div>
                        </>
                    )}

                    {(userID === ownerReply.comment_author) && (
                        <>
                            <div className="rounded-2xl bg-STROKE_COLOR justify-center items-center mb-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="mb-2 ml-3 mt-2 text-xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                                        {ownerFirst} {ownerLast}
                                    </h2>
                                </div>
                                <div className="place-self-center px-3">
                                    <hr className="my-3 border-0 border-BORDER_COLOR_1 border-solid border-b-2"/>
                                </div>
                                <p className="mb-3 ml-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_2">
                                    {reply}
                                </p>
                            </div>
                        </>
                    )}
                </>
            ))}
            {(thread.state === 2) && (
                <div className="rounded-2xl bg-STROKE_COLOR justify-center items-center mb-4">
                    <div className="flex justify-between items-center">
                        <h2 className="mb-2 ml-3 mt-2 text-xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                            {ownerFirst} {ownerLast}
                        </h2>
                    </div>
                    <div className="place-self-center px-3">
                        <hr className="my-3 border-0 border-BORDER_COLOR_1 border-solid border-b-2"/>
                    </div>
                    <p className="mb-3 ml-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_2">
                        {ownerReply.content}
                    </p>
                </div>
            )}

            {(thread.state === 3) && (
                <>
                    <div className="rounded-2xl bg-STROKE_COLOR justify-center items-center mb-4">
                        <div className="flex justify-between items-center">
                            <h2 className="mb-2 ml-3 mt-2 text-xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                                {ownerFirst} {ownerLast}
                            </h2>
                        </div>
                        <div className="place-self-center px-3">
                            <hr className="my-3 border-0 border-BORDER_COLOR_1 border-solid border-b-2"/>
                        </div>
                        <p className="mb-3 ml-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_2">
                            {ownerReply.content}
                        </p>

                        <div className="rounded-2xl bg-STROKE_COLOR justify-center items-center mb-4">
                            <div className="flex justify-between items-center">
                                <h2 className="mb-2 ml-3 mt-2 text-xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                                    {userFirst} {userLast}
                                </h2>
                            </div>
                            <div className="place-self-center px-3">
                                <hr className="my-3 border-0 border-BORDER_COLOR_1 border-solid border-b-2"/>
                            </div>
                            <p className="mb-3 ml-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_2">
                                {userReply.content}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CommentBox;
