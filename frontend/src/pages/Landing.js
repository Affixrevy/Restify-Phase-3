import React, {useEffect, useRef, useState} from 'react';
import {default as NavBar} from "../components/NavBar.js";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import PropertyCard from "../components/PropertyCard";
import propertyCard from "../components/PropertyCard";

const Landing = () => {
    const [properties, setProperties] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const dataFetchedRef = useRef(false)

    useEffect(() => {
        if (!dataFetchedRef.current) {
            setLoading(true);
            fetch(`http://localhost:8000/properties/view/?page=${page}`)
                .then(response => response.json())
                .then(data => {
                    setProperties(prevProperties => [...prevProperties, ...data.results]);
                    console.log(data.results)
                    dataFetchedRef.current = true;
                    setHasMore(data.next !== null);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }, [page]);


    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if (!loading && hasMore) {
                dataFetchedRef.current = false;
                setPage(prevPage => prevPage + 1);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    return (
        <div className="h-screen bg-BACKGROUND_COLOR_1">
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <main className="flex justify-center lg:mt-16 py-5 mx-auto w-full">
                <div className="w-11/12 md:w-2/3">
                    <div className="py-4">
                        <FilterBar></FilterBar>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 w-full">

                        {properties.length > 0 ? (
                            properties.map((item, index) => {
                                return <PropertyCard property={item}></PropertyCard>
                            })
                        ) : (
                            <p>Loading...</p>
                        )}

                    </div>
                    {loading && <p className="text-center justify-center ">Loading more properties...</p>}
                    {!loading && !hasMore &&
                        <p className="mt-2 p-2 text-FONT_COLOR_2 text-sm text-center justify-center">No more properties to
                            load</p>}
                </div>
            </main>
        </div>
    );
};

export default Landing;