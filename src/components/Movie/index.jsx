import React from "react";
import styles from "./Movie.module.css";

const Movie = ({ title, description, imageUrl }) => (
  <div className={styles.movie}>
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Movie;
