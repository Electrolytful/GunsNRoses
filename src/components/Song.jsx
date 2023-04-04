import React, { useState } from "react";
import "../assets/css/Song.css";

const Song = ({ name, release, cover }) => {
  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked((liked) => (liked = !liked));
  };

  return (
    <div className="song-container">
      <h2 className="song-name">{name}</h2>
      <h3 className="release-date">{release}</h3>
      <img
        src={cover}
        alt="Cover Image"
        className={liked ? "cover liked" : "cover"}
      />
      <div className="button-container">
        <button id="liked-button" onClick={handleLiked}>
          {liked ? "UNLIKE" : "LIKE"}
        </button>
      </div>
    </div>
  );
};

export default Song;
