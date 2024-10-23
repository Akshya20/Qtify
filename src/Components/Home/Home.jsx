import React from "react";
import Navbar from "../Navbar/Navbar"; // Adjust the path as necessary
import styles from "./Home.module.css"; // Create this file for styles
import Hero from "../Hero/Hero";

const Home = () => {
    const searchData = []; // You can populate this with actual search data

    return (
        <div className={styles.home}>
            <Navbar />
            <div className={styles.herosection}>
                <Hero />
            </div>
        </div>
    );
};

export default Home;