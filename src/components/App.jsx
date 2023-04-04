import React, { useState } from "react";
import Intro from "./Intro";
import SongList from "./SongList";
import Form from "./Form";
import "../assets/css/App.css";

const App = () => {
  const [songs, setSongs] = useState([
    {
      name: "Welcome to the Jungle",
      release: "28/09/1987",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg",
    },
    {
      name: "Sweet Child o Mine",
      release: "21/06/1988",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg",
    },
    {
      name: "November Rain",
      release: "18/02/1992",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg",
    },
    {
      name: "Paradise City",
      release: "21/07/1987",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg",
    },
  ]);

  const intro =
    "Guns N' Roses is an American hard rock band that formed in Los Angeles, California in 1985. The band is known for their energetic live performances and their fusion of various musical genres, including rock, blues, punk, and heavy metal.";

  return (
    <div className="container">
      <Intro name="Guns'N'Roses" type="Rock Band" intro={intro} />
      <SongList songs={songs} setSongs={setSongs} />
      <Form songs={songs} setSongs={setSongs} />
      <section></section>
    </div>
  );
};

export default App;
