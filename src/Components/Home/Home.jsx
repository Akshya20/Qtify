import React from "react";
import Navbar from "../Navbar/Navbar"; // Adjust the path as necessary
import styles from "./Home.module.css"; // Create this file for styles
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import Section1 from "../Section1/Section1";


const Home = () => {
    const searchData = []; // You can populate this with actual search data

    return (
        <div className={styles.home}>
            <Navbar />
            <div className={styles.herosection}>
                <Hero />
            </div>
            <Section />
            <Section1 />
        </div>
    );
};

export default Home;