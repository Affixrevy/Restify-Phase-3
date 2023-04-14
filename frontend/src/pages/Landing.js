import React from 'react';
import { default as NavBar } from "../components/NavBar.js";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import PropertyCard from "../components/PropertyCard";

const Landing = () => {
    return (
        <body className="h-screen bg-BACKGROUND_COLOR_1">
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <main className="flex justify-center lg:mt-16 py-5 mx-auto w-full">
                <div className="w-11/12 md:w-2/3">
                    <div className="py-4">
                        <FilterBar></FilterBar>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 w-full">
                        <PropertyCard></PropertyCard>
                        <PropertyCard></PropertyCard>
                        <PropertyCard></PropertyCard>
                        <PropertyCard></PropertyCard>
                        <PropertyCard></PropertyCard>
                        <PropertyCard></PropertyCard>
                        <PropertyCard></PropertyCard>
                    </div>
                </div>
            </main>
        </body>
    );
};

export default Landing;