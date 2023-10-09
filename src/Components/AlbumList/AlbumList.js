import React, { useState, useEffect } from "react";
import axios from "axios";
import './AlbumList.css' 
import AlbumCard from "../AlbumCard/AlbumCard";
import NavBar from "../Navbar/Navbar";
import TracksListing from "../TracksListing/TracksListing";




//a function that renders list of albums
const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        searchText: "",
        filterType: "Album",
      });

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

  const applyFilters = (album) => {
    if (filterOptions && filterOptions.filterType) {
      if (filterOptions.filterType === "Album") {
        return (
          album.name
            .toLowerCase()
            .includes(filterOptions.searchText.toLowerCase()) ||
          album.artist
            .toLowerCase()
            .includes(filterOptions.searchText.toLowerCase())
        );
      } else if (filterOptions.filterType === "Artist") {
        return album.artist
          .toLowerCase()
          .includes(filterOptions.searchText.toLowerCase());
      }
    }
    return true; 
  };

  const filteredAlbums = albums.filter((album) => applyFilters(album));

  const handleFilterChange = (newFilterOptions) => {
    // Update the filter options when the filter changes
    setFilterOptions(newFilterOptions);
  };


    return (
        <div>
      <NavBar onFilterChange={handleFilterChange} />
      <div className="album-list">
        <ul>
          {filteredAlbums.map((album) => (
            <li key={album.id}>
              <AlbumCard album={album} />
            </li>
          ))}
        </ul>
      </div>
      </div>
    );
  };

export default AlbumList;