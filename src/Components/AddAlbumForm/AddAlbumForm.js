import React, { useState } from 'react';
import './AddAlbumForm.css'
import { useNavigate } from 'react-router-dom';

const AddAlbumForm = () => {
    const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    // Add logic to submit the new album data
    console.log('Submitted:', albumData);

    // Simulate a delay (you can replace this with actual submission logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Submitted successfully:', albumData);

    // Clear form fields
    setAlbumData({
      name: '',
      imageUrl: '',
      artist: '',
    });

} catch (error) {
    console.error('Error submitting:', error);
  }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="add-album-form mt-4">
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
        <div class="d-grid gap-2 d-md-block">
          <button className="close btn btn-secondary" type="button" onClick={handleCancel}>Close</button>
          <button class="btn btn-primary" type="button">Add Album</button>
        </div>
      </form>
    </div>
  );
};

export default AddAlbumForm;