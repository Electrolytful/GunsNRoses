import React, { useState } from "react";
import "../assets/css/Form.css";

const Form = ({ songs, setSongs }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setDate("");
    const song = {
      name: name,
      release: date,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg",
      liked: false
    };
    setSongs([...songs, song]);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="form-container">
      <form action="submit">
        <label htmlFor="song-name">Song Name</label>
        <input value={name} type="text" id="song-name" onChange={handleName} />

        <label htmlFor="song-date">Release Date</label>
        <input value={date} type="text" id="song-date" onChange={handleDate} />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
