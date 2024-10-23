import React from "react";
import { Link } from "react-router-dom";
import ButtonImage from "../../Buttons/Button.png";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Link to="/feedback"> {/* Assuming you want to link to a feedback page */}
        <img src={ButtonImage} alt="Give Feedback" style={{ cursor: "pointer" }} />
      </Link>
    </nav>
  );
}

export default Navbar;
