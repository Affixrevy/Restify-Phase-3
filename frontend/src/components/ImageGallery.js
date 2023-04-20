import React, {useEffect, useState} from 'react';

import mansionImage from '../assets/img/mansion/mansion.webp';
import livingImage from '../assets/img/mansion/living.webp';
import kitchenImage from '../assets/img/mansion/kitchen.webp';
import sunImage from '../assets/img/mansion/sun.webp';
import washroomImage from '../assets/img/mansion/washroom.webp';
import bedroomImage from '../assets/img/mansion/bedroom.webp';
import {Link} from "react-router-dom";
import ReservationPopUp from "./ReservationPopUp";

function ImageGallery(props) {
    const page_id = props.id
    const [slideIndex, setSlideIndex] = useState(1);
    const [pageData, setPageData] = useState({})
    const [propertyImages, setPropertyImages] = useState([])
    const [dataFetched, setDataFetched] = useState(false)
    const [imagesFetched, setImagesFetched] = useState(false)
    const [propertyDescription, setPropertyDescription] = useState([])
    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        const userID = localStorage.getItem('userID')
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/properties/select/${page_id}/`)
            const responseData = await response.json()
            const description = responseData.description.split("\n");
            if (responseData.owner === parseInt(userID)) {
                setIsOwner(true);
            }
            setPageData(responseData)
            setPropertyDescription(description)
        }

        async function fetchImages() {
            const response = await fetch(`http://localhost:8000/properties/${page_id}/images/`)
            const responseData = await response.json()
            const imageUrls = responseData.map(item => `http://localhost:8000${item.image}`)
            setPropertyImages(imageUrls)
        }

        if (!dataFetched) {
            fetchData().then(response => {
                setDataFetched(true);
            });
        }

        if (!imagesFetched) {
            fetchImages().then(response => {
                setImagesFetched(true);
            });
        }
    }, [page_id])

    function plusSlides(n) {
        if (n === 1 && slideIndex === propertyImages.length + 1) {
            setSlideIndex(1);
        } else if (n === -1 && slideIndex === 1) {
            setSlideIndex(propertyImages.length + 1);
        } else {
            setSlideIndex(slideIndex + n);
        }
    }

    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };


    return (
        <main className="flex flex-col items-center justify-center py-10">
            {/* Container for the image gallery */}
            <div className="container lg:w-4/6 rounded-2xl">
                <div className="relative">
                    {/* Full-width images with number text */}

                    <div className="mySlides"
                         style={{display: slideIndex === 1 ? "block" : "none"}}
                         key={1}
                    >
                        <div className="numbertext">1 / {propertyImages.length + 1}</div>
                        <img
                            className="rounded-t-2xl"
                            src={pageData.main_pic}
                            style={{width: "100%"}}
                            alt={""}
                        />
                    </div>

                    {propertyImages.map((image, index) => {
                        return (
                            <div className="mySlides"
                                 style={{display: slideIndex === index + 2 ? "block" : "none"}}
                                 key={index + 2}
                            >
                                <div className="numbertext">{index + 2} / {propertyImages.length + 1}</div>
                                <img
                                    className="rounded-t-2xl"
                                    src={image}
                                    style={{width: "100%"}}
                                    alt={""}
                                />
                            </div>
                        )
                    })}


                    {/* Next and previous buttons */}
                    <p className="prev" onClick={() => plusSlides(-1)}>
                        &#10094;
                    </p>
                    <p className="next" onClick={() => plusSlides(1)}>
                        &#10095;
                    </p>
                </div>
                <div
                    className="caption-container grid xl:grid-cols-5 rounded-b-2xl bg-BACKGROUND_COLOR_2"
                >
                    <div
                        className="xl:col-span-5 flex flex-col justify-between items-left text-left p-4 leading-normal"
                    >
                        <h5
                            className="mb-2 text-5xl font-bold tracking-tight dark:text-FONT_COLOR_1"
                        >
                            {pageData.name}
                        </h5>
                        <div className="flex mb-3">
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
                                <path
                                    d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"/>
                                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                            </svg>
                            <h4 className="text-xs pt-1">
                                {pageData.city}, {pageData.province}
                            </h4>
                        </div>
                        <div className="flex mb-1 ml-0.5">
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
                            <p className="ml-0.5 text-sm font-bold text-FONT_COLOR_1">{pageData.stars} / 5</p>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div id="caption">
                            <div
                                className="flex flex-col justify-between items-left text-left p-4 leading-normal"
                            >
                                {propertyDescription.map((paragraph, index) => {
                                    return (
                                        <p
                                            className="mb-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_1"
                                            key={index}
                                        >
                                            {paragraph.replace(/\n/g, "")}
                                        </p>
                                    )
                                })}
                                <hr className="my-3"/>
                                <h2
                                    className="mb-2 text-3xl font-bold tracking-tight dark:text-FONT_COLOR_1"
                                >
                                    Sleeping
                                </h2>
                                <p
                                    className="mb-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_1"
                                >
                                    There are {pageData.num_beds} beds for {pageData.num_guests} guests.
                                </p>
                                <hr className="my-3"/>
                                <h2
                                    className="mb-2 text-3xl font-bold tracking-tight dark:text-FONT_COLOR_1"
                                >
                                    Amenities
                                </h2>
                                <p
                                    className="mb-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_1"
                                >
                                    {pageData.amenities}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex xl:justify-top xl:items-center xl:text-center text-left xl:pl-0 pl-4 flex-col"
                    >
                        {isOwner ? (
                            <Link to={"/modify-property"}>
                                <button
                                    className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold py-2 px-4 my-5 rounded-full"
                                >
                                    Edit
                                </button>
                            </Link>
                        ) : (
                            <div className="flex xl:justify-top xl:items-center xl:text-center text-left flex-col">
                                <h1 className="text-FONT_COLOR_2 text-2xl dark:text-FONT_COLOR_1">
                                    <b>CAD ${pageData.price}</b> night
                                </h1>
                                {/*<Link to={"/reservation"}>*/}
                                    <button
                                        className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold py-2 px-2 my-4 rounded-full"
                                        onClick={handleButtonClick}
                                    >
                                        Reserve
                                    </button>
                                {/*</Link>*/}
                                {showPopup && <ReservationPopUp propertyId={pageData.id} onClose={handleClosePopup} />}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ImageGallery;