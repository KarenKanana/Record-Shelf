import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    
    
    expect(getByText('Albums')).toBeInTheDocument();
    expect(getByText('Add New Album')).toBeInTheDocument();
  });

  
});