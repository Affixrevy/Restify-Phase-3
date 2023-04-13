import React from 'react';
import ImageGallery from "../components/ImageGallery";
import NavBar from "../components/NavBar";
import {Link} from "react-router-dom";
import CommentBox from "../components/CommentBox";

const Property = () => {
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
                                <Link to={"/"}>
                                    <button
                                        className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold py-2 px-4 my-5 rounded-full col-span-1"
                                    >
                                        Add comments
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <CommentBox></CommentBox>
                        <CommentBox></CommentBox>
                        <CommentBox></CommentBox>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Property;