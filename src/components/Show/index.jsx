import React from "react";
import styles from "./Show.module.css";

const Show = ({ title, description, imageUrl }) => (
  <div className={styles.show}>
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Show;
