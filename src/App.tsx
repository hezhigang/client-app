import React from 'react';
import './App.css';
import { AppService } from './services/app.service';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Books } from './components/Books';
import { BookDetail } from './components/BookDetail';

function App() {
  const appService = new AppService();
  const [books, setBooks] = useState<any>([]);

  const getAllBooks = async () => {
    const books = await appService.getBooks();
    setBooks(books);
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  return (

    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div>
              <Books books={books}></Books>
            </div>
          </div>
        } />
        <Route path="/books/:id" element={
          <BookDetail />
        } />
      </Routes>
    </Router>

  );
}

export default App;