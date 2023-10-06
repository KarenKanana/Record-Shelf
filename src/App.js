import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import NavBar from './Components/Navbar/Navbar';
import AlbumList from './Components/AlbumList/AlbumList';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <AlbumList/>
    </div>
  );
}

export default App;
