import React from "react";

//styles
import "./ComponentStyles.css";

// databar at bottom of story card holding likes and shares info (change to include heart & share logo)
function Databar(props) {
  return (
    <div className="Databar">
      <p>Likes {props.likes}</p>
      <p>Shares {props.shares}</p>
    </div>
  );
}

export default Databar;
