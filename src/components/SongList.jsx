import React from "react";
import Song from "./Song";
import "../assets/css/SongList.css";

const SongList = () => {
  return (
    <div className="songlist-container">
      <div className="song">
        <Song
          name="Welcome to the Jungle"
          release_date="28/09/1987"
          cover="https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg"
        />
      </div>

      <div className="song">
        <Song
          name="Sweet Child o Mine"
          release_date="21/06/1988"
          cover="https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg"
        />
      </div>

      <div className="song">
        <Song
          name="November Rain"
          release_date="18/02/1992"
          cover="https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg"
        />
      </div>

      <div className="song">
        <Song
          name="Paradise City"
          release_date="21/07/1987"
          cover="https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg"
        />
      </div>
    </div>
  );
};

export default SongList;
