import React from 'react';
import { Link } from "react-router-dom";

const FilterBar = () => {
    return (
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
                className="relative block h-10 px-6 tab rounded-2xl"
            >
                <span className="text-FONT_COLOR_1">Popular</span>
            </button>
            <button
                role="tab"
                aria-selected="false"
                aria-controls="panel-2"
                id="tab-2"
                tabIndex="1"
                className="relative block h-10 px-6 tab rounded-2xl"
            >
                <span className="text-FONT_COLOR_1">Price</span>
            </button>
            <button
                role="tab"
                aria-selected="false"
                aria-controls="panel-3"
                id="tab-3"
                tabIndex="2"
                className="relative block h-10 px-6 tab rounded-2xl"
            >
                <span className="text-FONT_COLOR_1">Rating</span>
            </button>
        </div>
    );
};

export default FilterBar;