import React from "react";

//styles
import "./ComponentStyles.css";

function User(props) {
  return <h1 className="User">{props.name}</h1>;
}

export default User;
