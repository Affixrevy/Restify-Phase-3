import React from 'react';
import ImageGallery from "../components/ImageGallery";
import NavBar from "../components/NavBar";

const Property = () => {
    return (
        <body className="h-screen bg-BACKGROUND_COLOR_1">
            <NavBar></NavBar>
            <ImageGallery></ImageGallery>
        </body>
    );
};

export default Property;