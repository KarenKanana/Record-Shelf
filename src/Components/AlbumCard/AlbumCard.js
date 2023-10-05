import React from 'react';

const AlbumCard = ({ album }) => {
  return (
    <div className="album">
      {/* Render album cover, title, artist */}
      <img src={album.coverImage} alt={album.title} />
      <h2>{album.title}</h2>
      <p>By {album.artist}</p>
      {/* Render TrackListing component with tracks */}
    </div>
  );
};

export default AlbumCard;