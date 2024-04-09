import React from "react";
import Show from "../Show";
import showStyles from "../Show/Show.module.css";
import { shows } from "../../Data/data";

const ShowsPage = () => (
  <div>
    <div className={showStyles.container}>
      {shows.map((show) => (
        <Show
          key={show.id}
          title={show.title}
          description={show.description}
          imageUrl={show.imageUrl}
        />
      ))}
    </div>
  </div>
);

export default ShowsPage;
