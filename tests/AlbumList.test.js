import React from 'react';
import { render } from '@testing-library/react';
import AlbumList from './AlbumList';

const mockAlbums = [
  { id: 1, name: 'Test Album 1', imageUrl: 'image1.jpg', artist: 'Artist 1' },
  { id: 2, name: 'Test Album 2', imageUrl: 'image2.jpg', artist: 'Artist 2' },
];

describe('AlbumList Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<AlbumList />);
    
    
    expect(getByText('Albums')).toBeInTheDocument();
    
    mockAlbums.forEach((album) => {
      expect(getByText(album.name)).toBeInTheDocument();
      expect(getByText(album.artist)).toBeInTheDocument();
    });
  });

 
});