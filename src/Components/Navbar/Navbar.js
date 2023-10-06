import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">

     {/* Search Box */}
     <div className='search-box'>
        <input type='text' placeholder='Search' />
        <button>Search</button>
      </div>

        {/* Checkboxes */}
     <div className="filter-options">
        <label>
          <input type="checkbox" /> Artist
        </label>
        <label>
          <input type="checkbox" /> Album
        </label>
      </div>
    


      {/* Add New Album Button */}
      <button className="add-album-button">
        Add New Album
      </button>
    </nav>
  );
};

export default NavBar;