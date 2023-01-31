import React from "react";

//styles
import "./ComponentStyles.css";

// render a simple h1 with user name (change to user details (avatar, name))
function User(props) {
  return <h1 className="User">{props.name}</h1>;
}

export default User;
