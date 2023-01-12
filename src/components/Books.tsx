import React from 'react'

export const Books = ({ books: books }: any) => {

    // console.log('length:::', books.length)
    if (books.length === 0) return null

    const BookItem = (book: any, index: number) => {

        return (
            <div key={index}>
                <img className="bookCover" src={book.coverImageUrl} />
                <div>
                    <span>{index + 1}. </span>
                    <span>{book.title}</span><br/>
                    <span>{book.author}</span><br/>
                    <span>CAD ${book.price}</span><br/> 
                    <span>{book.sku}</span>
                </div>
            </div>
        )
    }

    const bookDiv = books.map((book: any, index: number) => BookItem(book, index))

    return (
        <div>
            <h2>Kids Books: </h2>
            {bookDiv}
        </div>
    )
}