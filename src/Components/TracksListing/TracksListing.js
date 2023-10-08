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
  }, [albumId, filterOptions]); // Include albumId in the dependency array

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

  return (
    <div className="tracks-list">
      {/* <h2>Tracks</h2> */}
      <table className='tracks-table' class="table table-dark table-striped w-100">
        <thead>
          <tr class="text-white">
            <th class="text-center">#</th>
            <th class="w-75">Title</th>
            <th class="text-center">Length</th>
            {/* <th>Artist</th> */}
          </tr>
        </thead>
        <tbody>
          {filteredTracks.map((track) => (
            <tr key={track.id}>
              <td class="text-center">{track.id}</td>
              <td>{track.name}</td>
              <td class="text-center">{track.length}</td>
              {/* <td>{track.artist}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TracksListing;