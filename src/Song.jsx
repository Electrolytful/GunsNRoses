import React, { useState } from "react";
import "./Song.css";

const Song = (props) => {
  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked((liked) => (liked = !liked));
  };

  return (
    <>
      <div className={liked ? "song-container green" : "song-container"}>
        <h2 className="song-name">{props.name}</h2>
        <h3 className="release-date">{props.release_date}</h3>
        <img src={props.cover} alt="Cover Image" />
        <button id="liked-button" onClick={handleLiked}>
          {liked ? "Unlike" : "Like"}
        </button>
      </div>
    </>
  );
};

export default Song;
