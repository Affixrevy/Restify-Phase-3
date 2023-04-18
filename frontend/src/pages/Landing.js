import React from 'react';
import {default as NavBar} from "../components/NavBar.js";
import PropertyCard from "../components/PropertyCard";
import InfiniteScroll from "react-infinite-scroll-component";

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            hasMore: true,
            ordering: "",
            filters: {'location': "", 'arrival': "", 'departure': "", 'guests': ""}
        }
    }

    handleFiltering = () => {
        let location = document.getElementById('location').value
        let arrival = document.getElementById('arrival').value
        let departure = document.getElementById('departure').value
        let guests = document.getElementById('guests').value

        console.log(location)

        this.setState({
            ordering: this.state.ordering,
            items: [],
            hasMore: true,
            filters: {'location': location, 'arrival': arrival, 'departure': departure, 'guests': guests}
        });
    }

    handleOrdering = (e) => {
        let ordering = e.target.id;
        console.log(ordering)
        if (ordering === "tab-1") {
            ordering = "start_date"
        }
        else if (ordering === "tab-2") {
            ordering = "price"
        }
        else if (ordering === "tab-3") {
            ordering = "stars"
        }
        else {
            ordering = ""
        }
        console.log(ordering)
        this.setState({
          ordering: ordering,
          items: [],
          hasMore: true,
          filters: this.state.filters
        });
    }

    componentDidMount() {
        this.fetchData(1, this.state.ordering, this.state.filters)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.ordering !== this.state.ordering || prevState.filters !== this.state.filters) {
            this.fetchData(1, this.state.ordering, this.state.filters)
        }
    }

    fetchData = (page, ordering, filters) => {
        fetch(`http://localhost:8000/properties/view/?page=${page}&ordering=${ordering}&country=${filters.location}&start_date=${filters.arrival}&end_date=${filters.departure}&num_guests=${filters.guests}`)
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

            <div className="lg:absolute z-40 lg:top-10 w-full">
                <div className="relative container mx-auto py-3 md:px-10 lg:py-10 flex items-center justify-center">
                    <div
                        className="w-full md:w-3/4 max-w-7xl drop-shadow-lg p-6 rounded-2xl shadow dark:bg-POPUP_BACKGROUND_COLOR dark:border-gray-700">
                        <div className="flex flex-col lg:flex-row lg:justify-items-stretch justify-evenly">
                            <div className="relative py-2 lg:py-0 lg:mx-2 lg:w-1/2">
                                <input type="text" id="location"
                                    className="block rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                    placeholder=" "/>
                                <label htmlFor="location"
                                    className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Location</label>
                            </div>
                            <div className="relative py-2 lg:py-0 lg:mx-2 lg:w-1/6">
                                <input type="date" id="arrival"
                                    className="block  rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                    placeholder=" "/>
                                <label htmlFor="arrival"
                                    className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Arrival</label>
                            </div>
                            <div className="relative py-2 lg:py-0 lg:mx-2 lg:w-1/6">
                                <input type="date" id="departure"
                                    className="block  rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                    placeholder=" "/>
                                <label htmlFor="departure"
                                    className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Departure</label>
                            </div>
                            <div className="relative py-2 lg:py-0 lg:mx-2 lg:w-1/6 xl:w-1/12">
                                <input type="number" id="guests"
                                    className="block rounded-2xl px-2.5 pb-2.5 pt-5 w-full text-sm text-FONT_COLOR_1 bg-TEXT_FIELD_COLOR dark:bg-TEXT_FIELD_COLOR border-0 border-b-2 border-TEXT_FIELD_COLOR appearance-none dark:text-FONT_COLOR_1 dark:border-TEXT_FIELD_COLOR dark:focus:border-TEXT_FIELD_COLOR focus:outline-none focus:ring-0 focus:border-TEXT_FIELD_COLOR peer"
                                    placeholder=" "/>
                                <label htmlFor="guests"
                                    className="absolute text-sm text-FONT_COLOR_1 dark:text-FONT_COLOR_1 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-FONT_COLOR_2 peer-focus:dark:text-FONT_COLOR_2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Guests</label>
                            </div>
                            <div className="py-2 lg:py-0 lg:mx-2 lg:w-1/12">
                                <button
                                    className="rounded-2xl w-full h-full bg-BUTTON_COLOR text-center text-justify-center "
                                    onClick={this.handleFiltering}>
                                    <span className="material-symbols-outlined text-white">search</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="flex justify-center lg:mt-16 py-5 mx-auto w-full">
                <div className="w-11/12 md:w-2/3 justify-center">
                    <div className="py-4">
                        <div
                        role="tablist"
                        aria-label="tabs"
                        className="relative mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-2xl bg-BACKGROUND_COLOR_2 overflow-hidden shadow-2xl shadow-900/20 transition"
                        >
                            <button
                                role="tab"
                                aria-selected="true"
                                aria-controls="panel-1"
                                id="tab-1"
                                tabIndex="0"
                                className="relative block h-10 px-6 tab rounded-2xl text-FONT_COLOR_1"
                                onClick={this.handleOrdering}
                            >
                            Start Date
                            </button>
                            <button
                                role="tab"
                                aria-selected="false"
                                aria-controls="panel-2"
                                id="tab-2"
                                tabIndex="1"
                                className="relative block h-10 px-6 tab rounded-2xl text-FONT_COLOR_1"
                                onClick={this.handleOrdering}
                            >
                            Price
                            </button>
                            <button
                                role="tab"
                                aria-selected="false"
                                aria-controls="panel-3"
                                id="tab-3"
                                tabIndex="2"
                                className="relative block h-10 px-6 tab rounded-2xl text-FONT_COLOR_1"
                                onClick={this.handleOrdering}
                            >
                            Rating
                            </button>
                        </div>
                    </div>
                    <InfiniteScroll
                        next={() => this.fetchData(this.state.items.length / 8 + 1, this.state.ordering, this.state.filters)}
                        hasMore={this.state.hasMore}
                        loader={<h4 className="text-FONT_COLOR_2">Loading...</h4>}
                        dataLength={this.state.items.length}
                        scrollThreshold={0.9}
                        scrollableTarget="window"
                        endMessage={<p className="mt-2 p-2 text-FONT_COLOR_2 text-sm text-center justify-center">
                                        No more properties to load
                                    </p>}
                    >
                        <div className="grid lg:grid-cols-2 gap-4 w-full">
                            {this.state.items.map((item, index) => {
                                return <PropertyCard key={index} property={item} url={`/property/${item.id}`} color={0}></PropertyCard>
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