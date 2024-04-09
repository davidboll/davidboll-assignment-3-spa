// In Navigation.js
import React from "react";
import styles from "./Nav.module.css";

const Navigation = ({ setPage }) => (
  <nav>
    <button onClick={() => setPage("home")}>Home</button>
    <button onClick={() => setPage("movies")}>Movies</button>
    <button onClick={() => setPage("shows")}>Shows</button>
  </nav>
);

export default Navigation;
