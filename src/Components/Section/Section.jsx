import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard"; // The AlbumCard component from the previous step
import styles from "./Section.module.css"; // Create this for custom styles
import { Button } from "@mui/material";
import Carousel from "../Carousel/Carousel";

function Section() {
    const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [collapsedTopAlbums, setCollapsedTopAlbums] = useState(false);
  const [collapsedNewAlbums, setCollapsedNewAlbums] = useState(false);

  // Fetch data for top albums from the API
  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setTopAlbums(response.data);
        console.log("Top Albums:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching top albums:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/new")
      .then((response) => {
        setNewAlbums(response.data);
        console.log("New Albums:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching new albums:", error);
      });
  }, []);

  return (
    <div className={styles.sectionContainer}>
      {/* Top Albums Section */}
      <div className={styles.header}>
        <h2>Top Albums</h2>
        <Button
          variant="text"
          onClick={() => setCollapsedTopAlbums(!collapsedTopAlbums)}
          className={styles.collapseButton}
        >
          {collapsedTopAlbums ? "Collapse" : "Show All"}
        </Button>
      </div>

      {collapsedTopAlbums ? (
        <div className={styles.albumGrid}>
          {topAlbums.map((album) => (
            <AlbumCard
              key={album.id}
              albumName={album.title}
              imageUrl={album.image}
              follows={album.follows}
            />
          ))}
        </div>
      ) : (
        <Carousel
          items={topAlbums}
          renderItem={(album) => (
            <AlbumCard
              key={album.id}
              albumName={album.title}
              imageUrl={album.image}
              follows={album.follows}
            />
          )}
        />
      )}

      {/* New Albums Section */}
      <div className={styles.header}>
        <h2>New Albums</h2>
        <Button
          variant="text"
          onClick={() => setCollapsedNewAlbums(!collapsedNewAlbums)}
          className={styles.collapseButton}
        >
          {collapsedNewAlbums ? "Collapse" : "Show All"}
        </Button>
      </div>

      {collapsedNewAlbums ? (
        <div className={styles.albumGrid}>
          {newAlbums.map((album) => (
            <AlbumCard
              key={album.id}
              albumName={album.title}
              imageUrl={album.image}
              follows={album.follows}
            />
          ))}
        </div>
      ) : (
        <Carousel
          items={newAlbums}
          renderItem={(album) => (
            <AlbumCard
              key={album.id}
              albumName={album.title}
              imageUrl={album.image}
              follows={album.follows}
            />
          )}
        />
      )}
    </div>
  );
}

export default Section;