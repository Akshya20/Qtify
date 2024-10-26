import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard"; // The AlbumCard component from the previous step
import styles from "./Section.module.css"; // Create this for custom styles
import { Button } from "@mui/material";
import Carousel from "../Carousel/Carousel";

function Section() {
  const [albums, setAlbums] = useState([]);
  const [newalbums , setnewAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Fetch data for top albums from the API
  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setAlbums(response.data);
        console.log("result",response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/new")
      .then((response) => {
        setnewAlbums(response.data);
        console.log("result",response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, []);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleShowAllToggle = () => {
    setShowAll(!showAll); // Toggle the "Show All" state
  };

  return (
    <div className={styles.sectionContainer}>
      {/* Header Section with Title and Collapse Button */}
      <div className={styles.header}>
        <h2>Top Albums</h2>
        <Button
          variant="text"
          onClick={handleCollapseToggle}
          className={styles.collapseButton}
        >
          {collapsed ? "Collapse" : "Show All"}
        </Button>
      </div>

      {/* Grid Section */}
      {collapsed && (
        <div className={styles.albumGrid}>
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              albumName={album.title}
              imageUrl={album.image}
              follows={album.follows}
            />
          ))}
        </div>
      )}
      <div className={styles.header}>
        <h2>New Albums</h2>
        <Button
          variant="text"
          onClick={handleShowAllToggle}
          className={styles.showAllButton}
        >
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </div>

      {showAll ? (
        <div className={styles.albumGrid}>
          {newalbums.map((album) => (
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
          items={newalbums}
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