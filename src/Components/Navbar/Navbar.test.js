import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';

describe('NavBar', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/add-album" element={<div>Add Album Page</div>} />
          <Route path="/" element={<NavBar />} />
        </Routes>
      </MemoryRouter>
    );
  });

  it('displays the search input field', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/add-album" element={<div>Add Album Page</div>} />
          <Route path="/" element={<NavBar />} />
        </Routes>
      </MemoryRouter>
    );
    const searchInput = getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  it('handles search input change and calls onFilterChange', async () => {
    const onFilterChange = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/add-album" element={<div>Add Album Page</div>} />
          <Route path="/" element={<NavBar onFilterChange={onFilterChange} />} />
        </Routes>
      </MemoryRouter>
    );
    const searchInput = getByPlaceholderText('Search');
    const searchButton = getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'Test' } });
    expect(searchInput.value).toBe('Test');

    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(onFilterChange).toHaveBeenCalledWith({
        searchText: 'Test',
        filterType: [],
      });
    });
  });

  it('displays checkboxes for filters and handles checkbox change', async () => {
    const onFilterChange = jest.fn();
    const { getByLabelText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/add-album" element={<div>Add Album Page</div>} />
          <Route path="/" element={<NavBar onFilterChange={onFilterChange} />} />
        </Routes>
      </MemoryRouter>
    );
    const albumCheckbox = getByLabelText('Album');
    const artistCheckbox = getByLabelText('Artist');

    fireEvent.click(albumCheckbox);
    fireEvent.click(artistCheckbox);

   
    await waitFor(() => {
      expect(onFilterChange).toHaveBeenCalledWith({
        searchText: '',
        filterType: ['Album', 'Artist'],
      });
    });
  });

  it('displays "Add New Album" link and navigates to the "Add New Album" page when clicked', async () => {
    const { getByText, history } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/add-album" element={<div>Add Album Page</div>} />
          <Route path="/" element={<NavBar />} />
        </Routes>
      </MemoryRouter>
    );

    const addAlbumLink = getByText('Add New Album');
    expect(addAlbumLink).toBeInTheDocument();

    fireEvent.click(addAlbumLink);

    // Wait for navigation to complete
    await waitFor(() => {
      expect(history.location.pathname).toBe('/add-album');
    });
  });
});
