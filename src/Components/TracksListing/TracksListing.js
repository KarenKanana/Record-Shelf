import React, { useState, useEffect } from 'react';
import './TracksListing.css';
import axios from 'axios';


const TracksListing = ({ albumId, filterOptions }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/tracks?albumId=${albumId}`); // Filter tracks by albumId
        console.log (response)
        setTracks(response.data);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };
    fetchTracks();
  }, [albumId, filterOptions]); 

  const applyFilters = (track) => {
    console.log(track);
    if (filterOptions && filterOptions.filterType) {
      if (filterOptions.filterType === "Album") {
        return track.name
          .toLowerCase()
          .includes(filterOptions.searchText.toLowerCase());
      } else if (filterOptions.filterType === "Artist") {
        return track.artist
          .toLowerCase()
          .includes(filterOptions.searchText.toLowerCase());
      }
    }
    return true;
  };

  const filteredTracks = tracks.filter((track) => applyFilters(track));

  const handleUploadTrack = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
    }
  };

  return (
    <div className="tracks-list">
      <table className='tracks-table' class="table table-dark table-striped w-100">
        <thead>
          <tr class="text-white">
            <th class="text-center">#</th>
            <th class="w-75">Title</th>
            <th class="text-center">Length</th>
          </tr>
        </thead>
        
        <tbody>
          {filteredTracks.map((track) => (
            <tr key={track.id}>
              <td class="text-center">{track.id}</td>
              <td>{track.name}</td>
              <td class="text-center">{track.length}</td>
            </tr>

          ))}

        </tbody>
          <tr class="text-dark">  <button class="" onClick={handleUploadTrack}>Add Track</button>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileSelect}
          /></tr>
      </table>
    </div>
  );
};

export default TracksListing;