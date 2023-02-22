import React from 'react'
import { Link } from "react-router-dom";

export const Books = ({ books: books }: any) => {

    if (books.length === 0) return null

    const BookInfo = (book: any, index: number) => {

        return (
            <div key={index} className='card'>
                <img className="bookCover" src={book.thumbnail} alt="Cover of book" />
                <div>
                    <span>{index + 1}. </span>
                    <span className='bookTitle'><Link to={`/books/${book.id}`}>{book.title}</Link></span><br />
                    <span className='bookAuthor'>{book.author}</span><br />
                    <span className='sku'>{book.sku}</span>
                    <p>{book.description}</p>
                </div>
                <div>
                    <span><a href="#">Show details</a></span> &nbsp; &nbsp;
                    <span><button onClick={() => alert('test')}>Purchase - CAD ${book.price}</button></span>
                </div>
            </div>
        )
    }

    const allBooksDiv = books.map((book: any, index: number) => BookInfo(book, index))

    return (
        <div>
            <h2>Kids Books: </h2>
            {allBooksDiv}
        </div>
    )
}