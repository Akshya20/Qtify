import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard"; // Reusing the AlbumCard component
import styles from "./Section1.module.css"; // Custom styles for Section1
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";

function Section1() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]); // Start with an empty array
  const [selectedGenre, setSelectedGenre] = useState("all");

  // Fetch songs and genres data
  useEffect(() => {
    // Fetch songs
    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then((response) => {
        setSongs(response.data || []); // Ensure songs is an array
        console.log("Songs fetched:", response.data); // Debugging log
      })
      .catch((error) => console.error("Error fetching songs:", error));

    // Fetch genres
    axios
    .get("https://qtify-backend-labs.crio.do/genres")
    .then((response) => {
      console.log("Genres fetched:", response.data.data); // Log the correct data

      // Access the nested array under `data` and set genres if it’s an array
      const genresData = response.data.data;
      if (Array.isArray(genresData)) {
        setGenres(genresData);
      } else {
        console.error("Genres data is not in expected array format:", genresData);
      }
    })
    .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  // Filter songs based on selected genre
  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  const handleGenreChange = (_, newValue) => {
    setSelectedGenre(newValue);
  };

  return (
    <div className={styles.sectionContainer}>
     <div className={styles.header}></div>
      <h2>Songs</h2>
      <Tabs
        value={selectedGenre}
        onChange={handleGenreChange}
        className={styles.genreTabs}
      >
            console.log("Genres array:", genres);
        {/* Ensure that "All" tab is added */}
        <Tab key="all" label="All" value="all" />
        {genres.map((genre) => (
            
          <Tab key={genre.key} label={genre.label} value={genre.key} />
      
         
        ))}
      </Tabs>
      

      <Carousel
        items={filteredSongs}
        renderItem={(song) => (
          <AlbumCard
            key={song.id} // Ensure this is unique
            albumName={song.title}
            imageUrl={song.image}
            likes={song.likes} // Display likes instead of follows
          />
        )}
      />
      <div />
    </div>
  );
}

export default Section1;