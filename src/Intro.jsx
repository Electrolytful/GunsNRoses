import React from "react";

const Intro = (props) => {
  const name = props.name;
  const type = props.type;
  const intro = props.intro;

  return (
    <div className="intro-container">
      <h1 className="band_name">{name}</h1>
      <h2 className="band_type">{type}</h2>
      <p className="band_intro">{intro}</p>
    </div>
  );
};

export default Intro;
