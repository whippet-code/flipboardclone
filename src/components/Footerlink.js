import React from "react";

//styles
import "./ComponentStyles.css";

//props (link)
// render a simple p with the link name
function Footerlink(props) {
  return <p>{props.link}</p>;
}

export default Footerlink;
