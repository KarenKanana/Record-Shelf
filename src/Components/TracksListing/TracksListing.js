import React, { useState, useEffect } from 'react';
import './TracksListing.css';
import axios from 'axios';

const TracksListing = ({ albumId }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/tracks?albumId=${albumId}`); // Filter tracks by albumId
        setTracks(response.data);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };
    fetchTracks();
  }, [albumId]); // Include albumId in the dependency array

  return (
    <div className="tracks-listing">
      <h2>Tracks</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Length</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.id}>
              <td>{track.id}</td>
              <td>{track.name}</td>
              <td>{track.length}</td>
              {/* <td>{track.artist}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TracksListing;