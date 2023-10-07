import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Navbar />);
    
    
    expect(getByText('Search')).toBeInTheDocument();
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
    expect(getByText('Filter by:')).toBeInTheDocument();
    expect(getByText('Add New Album')).toBeInTheDocument();
  });

  it('search functionality works', () => {
    const onFilterChange = jest.fn();
    const { getByText, getByPlaceholderText } = render(<Navbar onFilterChange={onFilterChange} />);
    
    const searchInput = getByPlaceholderText('Search');
    
    fireEvent.change(searchInput, { target: { value: 'Test' } });
    fireEvent.click(getByText('Search'));
    
    expect(onFilterChange).toHaveBeenCalledWith({ searchText: 'Test', filterType: 'Album' });
  });

 
});