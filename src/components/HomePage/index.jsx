import React from "react";
import styles from "./HomePage.module.css";
import popcornImage from "../../assets/images/popcorn.png";

const HomePage = () => (
  <div>
    <p className={styles.description}>
      Welcome to Popcorn Time! Take a look at our movies and shows.
    </p>
    <img
      className={styles.welcomeImage}
      src={popcornImage}
      alt="Image of popcorn"
    />
  </div>
);

export default HomePage;
