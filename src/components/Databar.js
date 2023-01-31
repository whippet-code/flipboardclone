import React from "react";

//styles
import "./ComponentStyles.css";

function Databar(props) {
  return (
    <div className="Databar">
      <p>likes- {props.likes}</p>
      <p>shares- {props.shares}</p>
    </div>
  );
}

export default Databar;
