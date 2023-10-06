import React from "react";
import albums from 'albums.js'; //import dummy data


//a function that renders list of albums
const AlbumList = () => {
    return (
      <div className="album-list">
        <h2>Albums</h2>
        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              <img src={album.imageUrl} alt={album.name} />
              <h3>{album.name}</h3>
              <p>{album.artist}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default AlbumList;