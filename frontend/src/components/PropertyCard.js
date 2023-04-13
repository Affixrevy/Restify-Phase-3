import React from 'react';
import mansion from "../assets/img/mansion/mansion.webp";

const PropertyCard = () => {
    return (
        <a href="../property_page/property_user.html"
           className="flex flex-col items-start rounded-2xl shadow lg:flex-row lg:max-w-xl text-FONT_COLOR_2 hover:text-gray-700 hover:bg-gray-100 dark:bg-BACKGROUND_COLOR_2 dark:hover:bg-STROKE_COLOR">
            <img className="object-cover w-full rounded-t-2xl h-96 lg:h-auto lg:w-48 lg:rounded-none lg:rounded-l-2xl"
                 src={mansion} alt=""/>
                <div className="m-3 ml-4">
                    <h1 className="text-2xl font-bold tracking-tight dark:text-FONT_COLOR_1">Harry's Mansion</h1>
                    <div className="flex py-2 mb-1">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Rating star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                        </svg>
                        <p className="ml-0.5 text-sm font-bold text-current">4.95 / 5</p>
                    </div>
                    <h1
                        className="pt-2 text-current dark:text-FONT_COLOR_1"
                    >
                        <b>$110 CAD</b> night
                    </h1>
                </div>
        </a>
    );
};

export default PropertyCard;