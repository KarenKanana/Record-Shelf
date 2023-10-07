import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ onFilterChange }) => {
  const [showForm, setShowForm] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("Album");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSearch = () => {
    onFilterChange({ searchText, filterType });
  };

  return (
    <nav className="navbar">

    <div className='mid-nav'>
      {/* Search Box */}
        <div className='search-box'>
          <input type='text' placeholder='Search' value={searchText}
            onChange={(e) => setSearchText(e.target.value)}/>

          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Checkboxes */}
        <div className="filter-options">
        <label>
            Filter by:
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="Album">Album</option>
              <option value="Artist">Artist</option>
            </select>
          </label>
        </div>
    </div>
    

    <div className='add-button'>
        {/* Add New Album Button
        Use Link for navigation */}
        <Link to="/add-album" className="add-album-button">
                Add New Album
              </Link>
    </div>
    </nav>
  );
};

export default NavBar;