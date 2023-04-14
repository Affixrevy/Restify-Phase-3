import React from 'react';
import ImageGallery from "../components/ImageGallery";
import NavBar from "../components/NavBar";
import CommentBox from "../components/CommentBox";
import AddComment from "../components/AddComment";

const Property = () => {
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
    return (
        <body className="h-screen bg-BACKGROUND_COLOR_1">
            <NavBar></NavBar>
            <ImageGallery></ImageGallery>

            <div className="flex flex-col items-center justify-center pb-10">
                <div className="container lg:w-4/6 rounded-2xl bg-BACKGROUND_COLOR_2">
                    <div
                        className="flex flex-col justify-between items-left text-left p-4 leading-normal"
                    >
                        <div className="grid grid-cols-5 flex-row w-100">
                            <div className="xl:col-span-4 col-span-5">
                                <h5
                                    className="mb-4 text-5xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1"
                                >
                                    Comments
                                </h5>
                            </div>
                            <div className="xl:col-span-1 col-span-5">
                                    <AddComment></AddComment>
                            </div>
                        </div>
                        <CommentBox username={username1} content={content}></CommentBox>
                        <CommentBox username={username2} content={content_special}></CommentBox>
                        <CommentBox username={username3} content={content}></CommentBox>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Property;