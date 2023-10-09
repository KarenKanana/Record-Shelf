require('@babel/register');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import AlbumList from './AlbumList';
const axios = require('axios');


// Create a new instance of axios-mock-adapter
const mockAxios = new MockAdapter(axios);

describe('AlbumList component', () => {
  const mockAlbumsData = [
    { id: 1, name: 'Album 1', artist: 'Artist 1' },
    { id: 2, name: 'Album 2', artist: 'Artist 2' },
  ];

  beforeEach(() => {
    // Mock the axios.get request to respond with mockAlbumsData
    mockAxios.onGet('http://localhost:8000/albums').reply(200, mockAlbumsData);
  });

  it('renders the component without errors', async () => {
    render(<AlbumList />);

    // Wait for the axios request to resolve
    await waitFor(() => {
      expect(screen.getByText('Album 1')).toBeInTheDocument();
      expect(screen.getByText('Album 2')).toBeInTheDocument();
    });
  });

  it('displays albums filtered by searchText', async () => {
    render(<AlbumList />);

    // Wait for the axios request to resolve
    await waitFor(() => {
      expect(screen.getByText('Album 1')).toBeInTheDocument();
      expect(screen.getByText('Album 2')).toBeInTheDocument();
    });

    // Simulate changing the search text
    const searchInput = screen.getByPlaceholderText('Search');
    userEvent.type(searchInput, 'Album 1');

    // Wait for the component to re-render with the filtered results
    await waitFor(() => {
      expect(screen.getByText('Album 1')).toBeInTheDocument();
      expect(screen.queryByText('Album 2')).toBeNull();
    });
  });
});
