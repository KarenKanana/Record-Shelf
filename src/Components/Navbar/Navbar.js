import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
     {/* Search Bov */}
     <div className='search-box'>
        <input type='text' placeholder='Search'/>
     </div>

     {/* Checkboxes */}
     <div className="checkboxes">
        <label>
          <input type="checkbox" /> Artist
        </label>
        <label>
          <input type="checkbox" /> Album
        </label>
      </div>

      {/* Add New Album Button */}
      <button type="button" className="add-album-button">
        Add New Album
      </button>
    </nav>
  );
};

export default NavBar;