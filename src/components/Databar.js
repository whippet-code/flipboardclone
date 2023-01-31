import React from "react";

//styles
import "./ComponentStyles.css";

function Databar(props) {
  return (
    <div className="Databar">
      <p>Likes {props.likes}</p>
      <p>Shares {props.shares}</p>
    </div>
  );
}

export default Databar;
