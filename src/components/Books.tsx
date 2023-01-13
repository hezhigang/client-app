import React from 'react'

export const Books = ({ books: books }: any) => {

    // console.log('length:::', books.length)
    if (books.length === 0) return null

    const BookInfo = (book: any, index: number) => {

        return (
            <div key={index} className='card'>
                <img className="bookCover" src={book.coverImageUrl} />
                <div>
                    <span>{index + 1}. </span>
                    <span className='bookTitle'>{book.title}</span><br />
                    <span className='bookAuthor'>{book.author}</span><br />
                    <span>CAD ${book.price}</span><br />
                    <span className='sku'>{book.sku}</span>
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