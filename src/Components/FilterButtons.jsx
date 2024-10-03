import React from "react";

const FilterButtons = ({ setFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("incomplete")}>Incomplete</button>
    </div>
  );
};

export default FilterButtons;