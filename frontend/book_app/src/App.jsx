import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book_mangemet from './Book_mangemet';

function App() {
  return (
    <>
      <Navbar />
      <h2>BOOK APP</h2>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/book" element={<Book_mangemet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
