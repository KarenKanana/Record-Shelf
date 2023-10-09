import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import TracksListing from './TracksListing';

// Create a new instance of axios-mock-adapter
const mockAxios = new MockAdapter(axios);

describe('TracksListing component', () => {
  const albumId = 1;
  const filterOptions = { searchText: '', filterType: '' };
  const mockTracksData = [
    { id: 1, name: 'Track 1', length: '3:30', artist: 'Artist 1' },
    { id: 2, name: 'Track 2', length: '4:15', artist: 'Artist 2' },
  ];

  beforeEach(() => {
   
    mockAxios.onGet(`http://localhost:8001/tracks?albumId=${albumId}`).reply(200, mockTracksData);
  });

  it('fetches and displays tracks', async () => {
    render(<TracksListing albumId={albumId} filterOptions={filterOptions} />);
    
    // Check if tracks are fetched and displayed correctly
    expect(await screen.findByText('Track 1')).toBeInTheDocument();
    expect(await screen.findByText('Track 2')).toBeInTheDocument();
  });

  it('handles file upload', () => {
    render(<TracksListing albumId={albumId} filterOptions={filterOptions} />);
    
    const addTrackButton = screen.getByText('Add Track');
    const fileInput = screen.getByTestId('fileInput'); 

    fireEvent.click(addTrackButton);

    // Simulate file selection
    const file = new File(['track.mp3'], 'track.mp3', { type: 'audio/mpeg' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    
    expect(console.log).toHaveBeenCalledWith('Selected file:', file);
  });

  
});
