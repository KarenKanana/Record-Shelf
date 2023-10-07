import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './style.css';
// import NavBar from './Components/Navbar/Navbar';
import AlbumList from './Components/AlbumList/AlbumList';
import AddAlbumForm from './Components/AddAlbumForm/AddAlbumForm';


function App() {
  return (
    <Router>
    <div className="App">
    {/* <NavBar /> */}
        <Routes> 
          <Route path="/" element={<AlbumList />} />
          <Route path="/add-album" element={<AddAlbumForm />} />
        </Routes> 
    </div>
    </Router>
  );
}

export default App;
