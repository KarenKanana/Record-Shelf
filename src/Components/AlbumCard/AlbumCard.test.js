import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For enhanced DOM assertions
import AlbumCard from './AlbumCard';

describe('AlbumCard', () => {
  const albumData = {
    id: 1,
    name: 'Test Album',
    imageUrl: 'test-image.jpg',
    artist: 'Test Artist',
  };

  it('should render album details', () => {
    const { getByText, getByAltText } = render(<AlbumCard album={albumData} />);

    // Check if album details are present
    expect(getByText('Test Album')).toBeInTheDocument();
    expect(getByAltText('Test Album')).toBeInTheDocument();
    expect(getByText('By Test Artist')).toBeInTheDocument();
  });

  it('should render the TracksListing component', () => {
    const { getByTestId } = render(<AlbumCard album={albumData} />);

    // Check if the TracksListing component is rendered with the correct albumId
    expect(getByTestId('tracks-listing')).toHaveAttribute('albumId', '1');
  });
});
