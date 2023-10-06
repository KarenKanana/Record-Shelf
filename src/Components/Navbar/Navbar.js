import React, { useState } from 'react';
import './Navbar.css';
import AddAlbumForm from '../AddAlbumForm/AddAlbumForm';

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <nav className="navbar">

    <div className='mid-nav'>
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
    </div>
    

<div className='add-button'>
  {/* Add New Album Button */}
  <button className="add-album-button" onClick={toggleForm}>
        Add New Album
      </button>
</div>
{showForm && <AddAlbumForm />} {/* Display the form conditionally */}
    </nav>
  );
};

export default NavBar;