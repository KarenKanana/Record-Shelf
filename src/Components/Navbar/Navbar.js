import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
     {/* Search Box */}
     <div className='search-box'>
        <input type='text' placeholder='Search' class='search-input'/>
        {/* Checkboxes */}
     <div className="checkboxes">
        <label>
          <input type="checkbox" /> Artist
        </label>
        <label>
          <input type="checkbox" /> Album
        </label>
      </div>
     </div>


      {/* Add New Album Button */}
      <button type="button" className="add-album-button">
        Add New Album
      </button>
    </nav>
  );
};

export default NavBar;