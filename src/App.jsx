import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MoviesPage from "./components/MoviesPage";
import ShowsPage from "./components/ShowsPage";

import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");
  const pages = {
    home: { title: "Home Page", content: <HomePage /> },
    movies: { title: "Movies", content: <MoviesPage /> },
    shows: { title: "Shows", content: <ShowsPage /> },
  };

  return (
    <div className="App">
      <Header />
      <Nav setPage={setPage} />
      <Page {...pages[page]} />
      <Footer />
    </div>
  );
};

export default App;
