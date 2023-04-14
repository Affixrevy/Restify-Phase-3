import React from 'react';
import {default as NavBar} from "../components/NavBar.js";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import PropertyCard from "../components/PropertyCard";
import InfiniteScroll from "react-infinite-scroll-component";

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            hasMore: true
        }
    }

    componentDidMount() {
        this.fetchData(1)
    }

    fetchData = (page) => {
        fetch(`http://localhost:8000/properties/view/?page=${page}`)
            .then(response => response.json())
            .then(data => {
                this.setState({items: [...this.state.items, ...data.results], hasMore: data.next !== null})
                console.log(data)
            })
            .catch(error => {
                console.error(error);
            });

    }

    render() {
        return (
        <div className="bg-BACKGROUND_COLOR_1">
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <main className="flex justify-center lg:mt-16 py-5 mx-auto w-full">
                <div className="w-11/12 md:w-2/3 justify-center">
                    <div className="py-4">
                        <FilterBar></FilterBar>
                    </div>
                    <InfiniteScroll
                        next={() => this.fetchData(this.state.items.length / 8 + 1)}
                        hasMore={this.state.hasMore}
                        loader={<h4 className="text-FONT_COLOR_2">Loading...</h4>}
                        dataLength={this.state.items.length}
                        scrollThreshold={0.8}
                        scrollableTarget="window"
                        endMessage={<p className="mt-2 p-2 text-FONT_COLOR_2 text-sm text-center justify-center">
                                        No more properties to load
                                    </p>}
                    >
                        <div className="grid lg:grid-cols-2 gap-4 w-full">
                            {this.state.items.map((item, index) => {
                                return <PropertyCard key={index} property={item} url={"/property"} color={0}></PropertyCard>
                            })}
                        </div>
                    </InfiniteScroll>
                </div>
            </main>
            </div>
        );
    }
}

export default Landing;