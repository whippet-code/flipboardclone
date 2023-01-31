import React from "react";

//styles
import "./ComponentStyles.css";

//Components
import Filter from "./Filter";

// array for filter options (this could be built out to be objects or as route components)
const filterTypes = [
  "NEWS",
  "ENTERTAINMENT",
  "TECHNOLOGY",
  "TRAVEL",
  "FOOD",
  "SPORTS",
  "FLIPBOARD TV",
];

// build out the filterbar with <Filter /> components for each entry in the array (use .map())
function Filters() {
  return (
    <>
      <div className="filterBar">
        {filterTypes.map((filter, i) => {
          return <Filter filter={filter} key={i} />;
        })}
      </div>
      <hr className="filtersLine"></hr>
    </>
  );
}

export default Filters;
