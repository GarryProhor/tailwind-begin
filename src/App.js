import React from "react";
import Navbar from "./conponents/Navbar";
import Hero from "./conponents/Hero";
import HeadlineCards from "./conponents/HeadlineCards";
import Food from "./conponents/Food";
import Category from "./conponents/Category";


function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <HeadlineCards />
            <Food />
            <Category />
        </div>
    );
}

export default App;
