import React from 'react';
import './App.css';
import Book from './Components/Book';
import Navbar from './Components/Navbar';
function App() {

  return (
    <>
    <Navbar/>
    <h2>BOOK APP</h2>
    <div id="container">
      <Book/>
      <Book/>
      <Book/>
    </div>
    </>
  )
}

export default App
