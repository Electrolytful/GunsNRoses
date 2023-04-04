import React, { useState } from "react";
import "../assets/css/Song.css";

const Song = ({ song, likeSong }) => {
  return (
    <div className="song-container">
      <h2 className="song-name">{song.name}</h2>
      <h3 className="release-date">{song.release}</h3>
      <img
        src={song.cover}
        alt="Cover Image"
        className={song.liked ? "cover liked" : "cover"}
      />
      <div className="button-container">
        <button id="liked-button" onClick={() => likeSong(song)}>
          {song.liked ? "UNLIKE" : "LIKE"}
        </button>
      </div>
    </div>
  );
};

export default Song;
