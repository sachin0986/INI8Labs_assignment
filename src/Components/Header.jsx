import React from "react";
import "./CSS/Header.css"

const Header = ({ setFilter, setSearchQuery }) => {
  return (
    <header className="header">
      <h1>To-Do List</h1>
      <div className="header-controls">
        <div className="filter-buttons">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        </div>
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;