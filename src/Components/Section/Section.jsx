import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard"; // The AlbumCard component from the previous step
import styles from "./Section.module.css"; // Create this for custom styles
import { Button } from "@mui/material";

function Section() {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  // Fetch data for top albums from the API
  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, []);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
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
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </div>

      {/* Grid Section */}
      {!collapsed && (
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
    </div>
  );
}

export default Section;