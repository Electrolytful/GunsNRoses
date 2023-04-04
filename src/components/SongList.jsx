import React from "react";
import Song from "./Song";
import "../assets/css/SongList.css";

const SongList = ({ songs, setSongs }) => {
  const likeSong = (song) => {
    setSongs(
      songs.map((item) => {
        if (item === song) {
          return {
            ...item,
            liked: !item.liked,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="songlist-container">
      {songs.map((song, i) => (
        <Song key={i} song={song} likeSong={likeSong} />
      ))}
    </div>
  );
};

export default SongList;
