import React from 'react';

const CommentBox = () => {
    return (
        <div className="rounded-2xl bg-STROKE_COLOR justify-center items-center mb-4">
            <h2 className="mb-2 ml-3 mt-2 text-xl font-bold tracking-tight text-FONT_COLOR_1 dark:text-FONT_COLOR_1">
                Joe Mama
            </h2>
            <div className="place-self-center px-3">
                <hr className="my-3 border-0 border-BORDER_COLOR_1 border-solid border-b-2"/>
            </div>
            <p className="mb-3 ml-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ad nobis
                cupiditate veniam inventore commodi eligendi illo, perspiciatis
                accusantium consectetur distinctio id culpa minima, in officia dolorum
                itaque repellendus? Rerum.
            </p>
        </div>
    );
};

export default CommentBox;
