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
      // Create an object to send to the server
      const dataToSend = {
        name: albumData.name,
        imageUrl: albumData.imageUrl,
        artist: albumData.artist,
      };
  
      console.log(dataToSend)
      // Make a POST request to the server to add the album
      const response = await fetch('http://localhost:8000/albums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
  
      if (response.ok) {
        // The album was added successfully
        console.log('Album added successfully:', albumData);
  
        // Clear form fields
        setAlbumData({
          name: '',
          imageUrl: '',
          artist: '',
        });
  
       
        navigate(-1);
      } else {
        // Handle errors here
        console.error('Error adding album:', response.status, response.statusText);
      }
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
          <button className="btn btn-primary" type="submit">Add Album</button>

        </div>
      </form>
    </div>
  );
};

export default AddAlbumForm;