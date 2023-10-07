import React from 'react';
import { render } from '@testing-library/react';
import AlbumCard from './AlbumCard';

const mockAlbum = {
  id: 1,
  name: 'Test Album',
  imageUrl: 'test-image-url.jpg',
  artist: 'Test Artist',
};

describe('AlbumCard Component', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<AlbumCard album={mockAlbum} />);
    
    
    expect(getByText('Test Album')).toBeInTheDocument();
    expect(getByText('Test Artist')).toBeInTheDocument();
    expect(getByAltText('Test Album')).toBeInTheDocument();
  });

  
});