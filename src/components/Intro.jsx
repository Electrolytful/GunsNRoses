import React from "react";
import "../assets/css/Intro.css";

const Intro = (props) => {
  const name = props.name;
  const type = props.type;
  const intro = props.intro;

  return (
    <div className="intro-container">
      <h1 className="band-name">{name}</h1>
      <h2 className="band-type">{type}</h2>
      <p className="band-intro">{intro}</p>
    </div>
  );
};

export default Intro;
