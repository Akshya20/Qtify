import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import styles from "./AlbumCard.module.css"; // Create this for custom styles

function AlbumCard({ albumName, imageUrl, follows  }) {
    return (
      <div className={styles.albumContainer}>
        {/* Album Card */}
        <Card className={styles.albumCard}>
          {/* Album Image */}
          <CardMedia
            component="img"
            image={imageUrl}
            alt={albumName}
            className={styles.cardImage}
          />
  
          {/* Chip for follows inside the card */}
          <CardContent className={styles.cardContent}>
            <Chip
              label={`${follows} Follows`}
              className={styles.followChip}
            />
          </CardContent>
        </Card>
  
        {/* Album Name outside of the card */}
        <Typography variant="body1" className={styles.albumName}>
        {albumName}
        </Typography>
      </div>
    );
  }
  
  export default AlbumCard;