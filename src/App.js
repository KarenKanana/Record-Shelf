import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './style.css';
import AlbumList from './Components/AlbumList/AlbumList';
import AddAlbumForm from './Components/AddAlbumForm/AddAlbumForm';


function App() {
  return (
    
    <Router>
    <div className="App">
    
        <Routes> 
          <Route path="/" element={<AlbumList />} />
          <Route path="/add-album" element={<AddAlbumForm />} />
          <Route path="/add-album" element={<div>Add Album Page</div>} />
          
        </Routes> 
    </div>
    </Router>
  );
}

export default App;
