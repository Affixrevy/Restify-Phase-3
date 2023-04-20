import React, {useEffect, useState} from 'react';
import ImageGallery from "../components/ImageGallery";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

import CommentBox from "../components/CommentBox";

const Property = () => {

    const { id } = useParams();
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [commentContent, setCommentContent] = useState('');

    // TODO: fetch the data and change this threads variable
    const [threads, setThreads] = useState([]);
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    const [ownerId, setOwnerId] = useState(-1);

    useEffect(() => {
        fetch(`http://localhost:8000/comments/property/${id}/`)
            .then(response => response.json())
            .then(jsonData => setThreads(jsonData))
            .catch();

        const userID = localStorage.getItem('userID')
        }, [id]);
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

    async function createComment() {
        const url = 'http://localhost:8000/comments/create/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                subject_type: "property",
                subject_id: id,
                reservation_id: 2,
                content: commentContent
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

        const property = fetch(`http://localhost:8000/properties/select/${id}/`);

        var pDdata = property.then(response => {
            return response.json()
        }).then(data => {
            return data
        });

        const formData = new FormData();

        Promise.all([sender, pDdata]).then((values => {
            let sender = values[0];
            let pData = values[1];

            console.log(sender.id);
            console.log(pData.owner);

            formData.append("sender_type", 7);
            formData.append("sender_id", sender.id);
            formData.append("receiver_id", pData.owner);
            formData.append("reservation", false);
            formData.append("concellation", false);
            formData.append("comment", true);
            formData.append("content", sender.first_name + " " + sender.last_name + " commented on your property.");

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

    const handleComment = () => {
        if (commentContent.trim() === '') return;
        setShowCommentBox(false);
        createComment().then();
        sendNotif();
    };


    // useEffect(() => {
    //
    // }, [id])

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
                            <CommentBox key={index} thread={thread} id={id}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Property;