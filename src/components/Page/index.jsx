import React from "react";
import styles from "./Page.module.css";

const Page = ({ title, content, image }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.content}>{content}</p>
  </div>
);

export default Page;
