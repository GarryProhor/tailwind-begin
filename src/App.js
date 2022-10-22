import React from "react";
import Navbar from "./conponents/Navbar";
import Hero from "./conponents/Hero";
import HeadlineCards from "./conponents/HeadlineCards";
import Food from "./conponents/Food";


function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <HeadlineCards />
            <Food />
        </div>
    );
}

export default App;
