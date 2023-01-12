import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppService } from './services/app.service';
import { useState } from 'react';
import { Books } from './components/Books'
import DisplayBoard from './components/DisplayBoard';

function App() {
  const appService = new AppService();
  const [books, setBooks] = useState<any>([]);
  const [numberOfBooks, setNumberOfBooks] = useState<number>(0);

  const getAllBooks = async () => {
    const books = await appService.getBooks();
    setBooks(books);
    setNumberOfBooks(books.length);
  }

  return (
    <div className="App">
      <div>
        <DisplayBoard
          numberOfBooks={numberOfBooks}
          getAllBooks={getAllBooks}
        />
      </div>
      <div>
        <Books books={books}></Books>
      </div>
    </div>
  );
}

export default App;