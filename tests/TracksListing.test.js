import React from 'react';
import { render } from '@testing-library/react';
import TracksListing from '../src/Components/TracksListing';

const mockTracks = [
  { id: 1, name: 'Track 1', length: '3:45' },
  { id: 2, name: 'Track 2', length: '4:12' },
];

describe('TracksListing Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TracksListing albumId={1} />);
    
    
    expect(getByText('Track 1')).toBeInTheDocument();
    expect(getByText('Track 2')).toBeInTheDocument();
  });

  
});