import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { MemoryRouter } from 'react-router-dom'; 
import AddAlbumForm from './AddAlbumForm';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('AddAlbumForm', () => {
  // Helper function to render the component
  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <AddAlbumForm />
      </MemoryRouter>
    );
  };

  it('should render the form', () => {
    const { getByText, getByPlaceholderText } = renderComponent();

    
    expect(getByText('Add New Album')).toBeInTheDocument();
    expect(getByPlaceholderText('Album Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Image URL')).toBeInTheDocument();
    expect(getByPlaceholderText('Artist')).toBeInTheDocument();
  });

  it('should handle form submission', async () => {
    
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    });

    const { getByPlaceholderText, getByText } = renderComponent();

    // Fill in form fields
    fireEvent.change(getByPlaceholderText('Album Name'), {
      target: { value: 'Test Album' },
    });
    fireEvent.change(getByPlaceholderText('Image URL'), {
      target: { value: 'test-image.jpg' },
    });
    fireEvent.change(getByPlaceholderText('Artist'), {
      target: { value: 'Test Artist' },
    });

    // Submit the form
    fireEvent.click(getByText('Add Album'));

    // Wait for the form submission to complete
    await waitFor(() => {
      // Check if fetch was called with the correct data
      expect(fetch).toHaveBeenCalledWith('http://localhost:8000/albums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test Album',
          imageUrl: 'test-image.jpg',
          artist: 'Test Artist',
        }),
      });

      // Check if the form fields are cleared
      expect(getByPlaceholderText('Album Name')).toHaveValue('');
      expect(getByPlaceholderText('Image URL')).toHaveValue('');
      expect(getByPlaceholderText('Artist')).toHaveValue('');
    });
  });

  it('should handle form submission failure', async () => {
    // Mock fetch to simulate a failed POST request
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
    });
  
    const { getByText, getByPlaceholderText, findAllByText } = renderComponent();
  
    // Submit the form
    fireEvent.click(getByText('Add Album'));
  
    // Wait for the form submission to complete
    await waitFor(() => {
      // Check if fetch was called
      expect(fetch).toHaveBeenCalled();
    });
  
    // Use findAllByText with a custom text matcher
    const errorMessages = await findAllByText(
      (content, element) => content.startsWith('Error adding album:')
    );
  
    // Check if at least one error message is displayed
    expect(errorMessages.length).toBeGreaterThan(0);
  });
  

  it('should handle form cancellation', () => {
    const navigateMock = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);

    const { getByText } = renderComponent();

    // Click the "Close" button
    fireEvent.click(getByText('Close'));

    // Check if the navigate function was called
    expect(navigateMock).toHaveBeenCalledWith(-1);
  });
});
