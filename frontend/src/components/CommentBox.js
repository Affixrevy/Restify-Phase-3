import React, { useState } from 'react';

const CommentBox = ({ username, content }) => {
    const [replies, setReplies] = useState([]);
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyContent, setReplyContent] = useState('');

    const handleReply = () => {
        if (replyContent.trim() === '') return;
        setReplies([...replies, replyContent]);
        setReplyContent('');
        setShowReplyBox(false);
    };

    return (
        <div className="rounded-2xl bg-STROKE_COLOR justify-center items-center mb-4">
            <div className="flex justify-between items-center">
                <h2 className="mb-2 ml-3 mt-2 text-xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                    {username}
                </h2>
                <button
                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 font-bold py-1 px-4 rounded mr-3 mt-2"
                    onClick={() => setShowReplyBox(!showReplyBox)}
                >
                    Reply
                </button>
            </div>
            <div className="place-self-center px-3">
                <hr className="my-3 border-0 border-BORDER_COLOR_1 border-solid border-b-2"/>
            </div>
            <p className="mb-3 ml-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_2">
                {content}
            </p>
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
            {replies.map((reply, index) => (
                <div key={index} className="ml-8 mt-2">
                    <CommentBox username={username} content={reply} />
                </div>
            ))}
        </div>
    );
};

export default CommentBox;
