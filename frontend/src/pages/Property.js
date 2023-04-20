import React, {useEffect, useState} from 'react';
import ImageGallery from "../components/ImageGallery";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

import CommentBox from "../components/CommentBox";

const Property = () => {

    const { id } = useParams();

    const username = "Harry Duong";
    const username1 = 'Joe Mama';
    const username2 = 'Harry Potter';
    const username3 = 'Peter Parker';
    const content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ad nobis\n" +
        "                cupiditate veniam inventore commodi eligendi illo, perspiciatis\n" +
        "                accusantium consectetur distinctio id culpa minima, in officia dolorum\n" +
        "                itaque repellendus? Rerum.";
    const content_special = "Avada kedavra. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ad nobis\n" +
        "                cupiditate veniam inventore commodi eligendi illo, perspiciatis\n" +
        "                accusantium consectetur distinctio id culpa minima, in officia dolorum\n" +
        "                itaque repellendus? Rerum."

    const [comments, setComments] = useState([
        { username: username1, content: content },
        { username: username2, content: content_special },
        { username: username3, content: content },
    ]);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [commentContent, setCommentContent] = useState('');
    // TODO: fetch the data and change this threads variable
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/comments/property/${id}/`)
            .then(response => response.json())
            .then(jsonData => setThreads(jsonData))
            .catch();
    }, []);
    //     async function fetchThreads() {
    //         const response = await fetch(`http://localhost:8000/comments/property/${id}/`);
    //         const responseJson = await response.json();
    //         console.log(id);
    //         setThreads(responseJson);
    //         console.log(threads);
    //     }
    //
    //     fetchThreads()
    // }, [])

    const handleComment = () => {
        if (commentContent.trim() === '') return;
        setComments([...comments, { username: username, content: commentContent }]);
        setCommentContent('');
        setShowCommentBox(false);
        // console.log(threads[0]);
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
                        {threads.map((thread, index) => (
                            <CommentBox key={index} thread={thread} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;