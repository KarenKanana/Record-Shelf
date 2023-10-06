import React from 'react';
import TracksListing from '../TracksListing/TracksListing';
import './AlbumCard.css'
//function that renders album information
const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <div className="album-details">
        <div >
          <img src={album.imageUrl} alt={album.name} className='card-image' />
          </div>
        <div>
          <h3>{album.name}</h3>
          <p>{album.artist}</p>
          <button>More Info</button>
        </div>
      </div>
    <div className="tracks-table">
      {/* <h4>Tracks</h4> */}
      <TracksListing albumId={album.id} /> {/* Pass albumId as a prop */}
    </div>
  </div>
);
};
    


export default AlbumCard;