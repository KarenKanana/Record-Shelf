import React, { useState, useEffect } from "react";
import axios from "axios";
// import albums from 'albums.js'; //import dummy data
import './AlbumList.css' //import styling 
import AlbumCard from "../AlbumCard/AlbumCard";



//a function that renders list of albums
const AlbumList = () => {
    const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get("http://localhost:8000/albums");
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
  }, []);

    return (
      <div className="album-list">
        <h2>Albums</h2>
        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              {/* <img src={album.imageUrl} alt={album.name} />
              <h3>{album.name}</h3>
              <p>{album.artist}</p> */}
              <AlbumCard album={album} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default AlbumList;