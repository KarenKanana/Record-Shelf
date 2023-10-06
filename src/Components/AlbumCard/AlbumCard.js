import React from 'react';
import TracksListing from '../TracksListing/TracksListing';
//function that renders album information
const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <img src={album.imageUrl} alt={album.name} />
      <h3>{album.name}</h3>
      <p>{album.artist}</p>
      <button>More Info</button>
      <TracksListing/>
    </div>
  );
};

export default AlbumCard;