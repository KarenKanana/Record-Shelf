import React, { useState } from 'react';
import './AddAlbumForm.css'

const AddAlbumForm = () => {
  const [albumData, setAlbumData] = useState({
    name: '',
    imageUrl: '',
    artist: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbumData({
      ...albumData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the new album data
    console.log('Submitted:', albumData);
    // Clear form fields
    setAlbumData({
      name: '',
      imageUrl: '',
      artist: '',
    });
  };

  return (
    <div className="add-album-form">
      <h2>Add New Album</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Album Name"
          value={albumData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={albumData.imageUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={albumData.artist}
          onChange={handleChange}
        />
        <button type="submit">Add Album</button>
      </form>
    </div>
  );
};

export default AddAlbumForm;