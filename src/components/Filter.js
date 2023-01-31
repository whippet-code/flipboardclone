import React from "react";

//styles
import "./ComponentStyles.css";

// render simple <h1> for passed in filter name
function Filter(props) {
  return <h1 className="Filter">{props.filter}</h1>;
}

export default Filter;
