import React from "react";
import Intro from "./Intro";
import SongList from "./SongList";

const App = () => {
  const intro =
    "Guns N' Roses is an American hard rock band that formed in Los Angeles, California in 1985. The band is known for their energetic live performances and their fusion of various musical genres, including rock, blues, punk, and heavy metal.";

  return (
    <>
      <Intro name="Guns'N'Roses" type="Rock" intro={intro} />
      <SongList />
    </>
  );
};

export default App;
