import React, { useState, useEffect } from "react";
import './TracksListing.css'
import axios from 'axios';

const TrackListing = ({ albumId }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/tracks"); // Replace with the correct API endpoint for tracks
        setTracks(response.data);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };
    fetchTracks();
  }, []);

  return (
    <div className="tracks-listing">
      <h2>Tracks</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <div className="track-info">
              <span className="track-number">{track.id}</span>
              <span className="track-title">{track.name}</span>
              <span className="track-length">{track.length}</span>
            </div>
            <span className="track-artist">{track.artist}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackListing;