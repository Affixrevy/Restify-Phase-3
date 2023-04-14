import React, { useState } from 'react';

import mansionImage from '../assets/img/mansion/mansion.webp';
import livingImage from '../assets/img/mansion/living.webp';
import kitchenImage from '../assets/img/mansion/kitchen.webp';
import sunImage from '../assets/img/mansion/sun.webp';
import washroomImage from '../assets/img/mansion/washroom.webp';
import bedroomImage from '../assets/img/mansion/bedroom.webp';

function ImageGallery() {
    const [slideIndex, setSlideIndex] = useState(1);

    function plusSlides(n) {
        if (n === 1 && slideIndex === 6) {
            setSlideIndex(1);
        } else if (n === -1 && slideIndex === 1) {
            setSlideIndex(6);
        } else {
            setSlideIndex(slideIndex + n);
        }
    }

    return (
        <main className="flex flex-col items-center justify-center py-10">
            {/* Container for the image gallery */}
            <div className="container lg:w-4/6 rounded-2xl">
                <div className="relative">
                    {/* Full-width images with number text */}
                    <div className="mySlides" style={{ display: slideIndex === 1 ? "block" : "none" }}>
                        <div className="numbertext">1 / 6</div>
                        <img
                            className="rounded-t-2xl"
                            src={mansionImage}
                            style={{ width: "100%" }}
                            alt={""}
                        />
                    </div>

                    <div className="mySlides" style={{ display: slideIndex === 2 ? "block" : "none" }}>
                        <div className="numbertext">2 / 6</div>
                        <img
                            className="rounded-t-2xl"
                            src={livingImage}
                            style={{ width: "100%" }}
                            alt={""}
                        />
                    </div>

                    <div className="mySlides" style={{ display: slideIndex === 3 ? "block" : "none" }}>
                        <div className="numbertext">3 / 6</div>
                        <img
                            className="rounded-t-2xl"
                            src={kitchenImage}
                            style={{ width: "100%" }}
                            alt={""}
                        />
                    </div>

                    <div className="mySlides" style={{ display: slideIndex === 4 ? "block" : "none" }}>
                        <div className="numbertext">4 / 6</div>
                        <img
                            className="rounded-t-2xl"
                            src={sunImage}
                            style={{ width: "100%" }}
                            alt={""}
                        />
                    </div>

                    <div className="mySlides" style={{ display: slideIndex === 5 ? "block" : "none" }}>
                        <div className="numbertext">5 / 6</div>
                        <img
                            className="rounded-t-2xl"
                            src={washroomImage}
                            style={{ width: "100%" }}
                            alt={""}
                        />
                    </div>

                    <div className="mySlides" style={{ display: slideIndex === 6 ? "block" : "none" }}>
                        <div className="numbertext">6 / 6</div>
                        <img
                            className="rounded-t-2xl"
                            src={bedroomImage}
                            style={{ width: "100%" }}
                            alt={""}
                        />
                    </div>

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
                            Harry's Mansion
                        </h5>
                        <div className="flex mb-1">
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
                            <p className="ml-0.5 text-sm font-bold text-FONT_COLOR_1">4.95 / 5</p>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div id="caption">
                            <div
                                className="flex flex-col justify-between items-left text-left p-4 leading-normal"
                            >
                                <p
                                    className="mb-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_1"
                                >
                                    Hello look at this beautiful mansion that you can rent out for
                                    an insane amount of money.
                                </p>
                                <p
                                    className="mb-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_1"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Dignissimos consectetur accusantium quae mollitia officia
                                    quam, asperiores libero delectus nostrum! Sit omnis, sequi
                                    ratione voluptates enim nesciunt doloremque asperiores qui
                                    reiciendis fuga nemo quae eaque aliquid dolor repellat
                                    assumenda facilis culpa quasi id et? Quaerat molestiae, et
                                    voluptates ducimus facilis eos? Commodi nostrum alias ducimus
                                    explicabo enim architecto magnam quasi. Deserunt nemo iure
                                    dolores ex molestias magni ratione, quaerat, totam sunt,
                                    itaque animi iusto earum! Ipsam quos iste nisi aperiam
                                    asperiores nobis obcaecati, numquam error quod, adipisci nemo
                                    consequatur incidunt facilis labore doloremque accusantium.
                                    Officiis deserunt, quae iure consequuntur incidunt cupiditate
                                </p>
                                <p
                                    className="mb-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_1"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Debitis autem nesciunt quos explicabo iure, placeat commodi!
                                    Enim iusto error qui praesentium eius aliquid porro deserunt
                                    sunt eveniet aut placeat culpa fuga, id perspiciatis delectus
                                    velit.
                                </p>
                                <hr className="my-3" />
                                <h2
                                    className="mb-2 text-3xl font-bold tracking-tight dark:text-FONT_COLOR_1"
                                >
                                    Sleeping
                                </h2>
                                <p
                                    className="mb-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_1"
                                >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                                    ad nobis cupiditate veniam inventore commodi eligendi illo,
                                    perspiciatis accusantium consectetur distinctio id culpa
                                    minima, in officia dolorum itaque repellendus? Rerum.
                                </p>
                                <hr className="my-3" />
                                <h2
                                    className="mb-2 text-3xl font-bold tracking-tight dark:text-FONT_COLOR_1"
                                >
                                    Amenities
                                </h2>
                                <p
                                    className="mb-3 font-normal text-FONT_COLOR_2 dark:text-FONT_COLOR_1"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Tempore repudiandae libero ipsam in fugit, quasi consectetur
                                    accusamus assumenda id, quas impedit sapiente alias voluptas
                                    hic. Cumque unde perspiciatis tempora, vitae expedita quia
                                    vero necessitatibus earum corrupti voluptatem cupiditate
                                    soluta libero. Error dolorum temporibus doloribus placeat
                                    distinctio animi in odit dicta.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex xl:justify-top xl:items-center xl:text-center text-left xl:pl-0 pl-4 flex-col"
                    >
                        <button
                            className="bg-BUTTON_COLOR hover:bg-STROKE_COLOR text-FONT_COLOR_1 w-48 font-bold py-2 px-4 my-5 rounded-full"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ImageGallery;