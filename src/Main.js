import React from "react";

export default function Main(props) {
  return (
    <div className="main">
      <input
        placeholder="topText"
        name="topText"
        value={props.topText}
        onChange={props.handleChange}
      />
      <input
        placeholder="bottomText"
        name="bottomText"
        value={props.bottomText}
        onChange={props.handleChange}
      />
      <button onClick={props.getNewMeme}>Generate New Meme</button>
      <div className="container">
        <img src={props.meme} alt="" className="meme--img" />
        <h2 className="top-text">{props.topText}</h2>
        <h2 className="bottom-text">{props.bottomText}</h2>
      </div>
    </div>
  );
}
