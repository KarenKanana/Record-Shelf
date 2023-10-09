import React from 'react';
import TracksListing from '../TracksListing/TracksListing';
import './AlbumCard.css'
//function that renders album information
const AlbumCard = ({ album }) => {
  return (
    <div className="album-card" class="container card mb-4 p-3">
      <div className="album-details" class="card-body d-flex">
        <div >
          <img class="img-thumbnail rounded float-left" src={album.imageUrl} alt={album.name} className='card-image' />
          </div>
        <div className='text-left px-4 my-auto'>
        <h3>ALBUM</h3>
          <h1 class="card-title">{album.name}</h1>
          <p class="card-subtitle text-black">By {album.artist}</p>
          <i class="fa-solid fa-ellipsis"></i>
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