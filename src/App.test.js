import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  it('renders the AlbumList component by default', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Check if the AlbumList component is rendered
    expect(screen.getByText('Albums')).toBeInTheDocument();
  });

  it('renders the AddAlbumForm component when the route is /add-album', () => {
    render(
      <Router initialEntries={['/add-album']}>
        <App />
      </Router>
    );

    expect(screen.getByText('Add New Album')).toBeInTheDocument();
  });
});
