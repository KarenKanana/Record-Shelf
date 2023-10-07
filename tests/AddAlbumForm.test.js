import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AddAlbumForm from '../src/Components/AddAlbumForm/AddAlbumForm';

describe('AddAlbumForm Component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<AddAlbumForm />);
    
    
    expect(getByText('Add New Album')).toBeInTheDocument();
    expect(getByPlaceholderText('Album Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Image URL')).toBeInTheDocument();
    expect(getByPlaceholderText('Artist')).toBeInTheDocument();
  });

  it('submits form data correctly', async () => {
    const { getByText, getByPlaceholderText } = render(<AddAlbumForm />);
    
    
    fireEvent.change(getByPlaceholderText('Album Name'), { target: { value: 'Test Album' } });
    fireEvent.change(getByPlaceholderText('Image URL'), { target: { value: 'test-image-url.jpg' } });
    fireEvent.change(getByPlaceholderText('Artist'), { target: { value: 'Test Artist' } });
    
    
    fireEvent.click(getByText('Add Album'));
    
    
    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith('Submitted:', {
        name: 'Test Album',
        imageUrl: 'test-image-url.jpg',
        artist: 'Test Artist',
      });
    });
  });

  
});