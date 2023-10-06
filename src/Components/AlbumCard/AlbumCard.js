import React from 'react';

//function that renders album information
const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <img src={album.imageUrl} alt={album.name} />
      <h3>{album.name}</h3>
      <p>{album.artist}</p>
      <button>More Info</button>
    </div>
  );
};

export default AlbumCard;