// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ onFilterChange }) => {
  const [showForm, setShowForm] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterTypes, setFilterTypes] = useState([]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSearch = () => {
    onFilterChange({ searchText, filterType: filterTypes });
  };

  const handleCheckboxChange = (value) => {
    if (filterTypes.includes(value)) {
      setFilterTypes(filterTypes.filter((type) => type !== value));
    } else {
      setFilterTypes([...filterTypes, value]);
    }
  };

  return (
    <nav className="navbar">
      <div className='mid-nav'>
        <div className='search-box'>
          <input
            type='text'
            placeholder='Search'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Checkboxes */}
        <div className="filter-options">
          <input
            type="checkbox"
            id="albumCheckbox"
            value="Album"
            checked={filterTypes.includes("Album")}
            onChange={() => handleCheckboxChange("Album")}
          />
          <label htmlFor="albumCheckbox">Album</label>

          <input
            type="checkbox"
            value="Artist"
            checked={filterTypes.includes("Artist")}
            onChange={() => handleCheckboxChange("Artist")}
          />
          <label htmlFor="artistCheckbox">Artist</label>
        </div>
      </div>
    
      <div className='add-button'>
      
      <a className="add-album-button" href="/add-album">
          Add New Album
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
