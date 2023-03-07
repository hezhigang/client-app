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
                    <span className='bookTitle'>{book.title}</span><br />
                    <span className='bookAuthor'>{book.author}</span><br />
                    <span>CAD ${book.price}</span><br />
                    <span className='sku'>{book.sku}</span>
                    <p>{book.description}</p>
                </div>
                <div>
                    <span><Link to={`/books/${book.id}`}>Show details</Link></span> &nbsp; &nbsp;
                    <span><button onClick={() => alert('test')}>Add to cart</button></span>
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