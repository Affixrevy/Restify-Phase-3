import React from 'react';
import mansion from "../assets/img/mansion/mansion.webp";
import { Link } from "react-router-dom";

const PropertyCard = (props) => {
    const property = props.property
    return (
        <Link to={`/property/${property.id}`}
           className="flex flex-col items-start rounded-2xl shadow lg:flex-row lg:max-w-xl lg:h-max-1 text-FONT_COLOR_2 hover:text-gray-700 hover:bg-gray-100 dark:bg-BACKGROUND_COLOR_2 dark:hover:bg-STROKE_COLOR">
            <img className="object-cover w-full rounded-t-2xl h-96 lg:h-40 lg:w-48 lg:rounded-none lg:rounded-l-2xl"
                 src={property.main_pic} alt=""/>
                <div className="m-3 ml-4">
                    <h1 className="text-2xl font-bold tracking-tight dark:text-FONT_COLOR_1">{property.name}</h1>
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
                        <b>${property.price} CAD</b> night
                    </h1>
                    <div className="flex items-center">
                          <svg
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-1 ml-0 pl-0 text-slate-400 dark:text-slate-500"
                                aria-hidden="true"
                          >
                            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                          </svg>
                          <h4 className="text-xs pt-1">
                            {property.city}, {property.province}
                          </h4>
                    </div>

                </div>
        </Link>
    );
};

export default PropertyCard;