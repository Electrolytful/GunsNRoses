import React from "react";
import Song from "./Song";
import "../assets/css/SongList.css";

const SongList = ({ songs, setSongs }) => {
  return (
    <div className="songlist-container">
      {console.log(songs)}
      {songs.map((item, i) => {
        return (
          <div className="song">
            <Song name={item.name} release={item.release} cover={item.cover} />
          </div>
        );
      })}
    </div>
  );
};

export default SongList;
