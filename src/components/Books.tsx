import React from 'react'

export const Books = ({ books: books }: any) => {

    // console.log('length:::', books.length)
    if (books.length === 0) return null

    const BookRow = (book: any, index: number) => {

        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.sku}</td>
            </tr>
        )
    }

    const bookTable = books.map((book: any, index: number) => BookRow(book, index))

    return (
        <div className="container">
            <h2>Kids Books: </h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Sku</th>
                    </tr>
                </thead>
                <tbody>
                    {bookTable}
                </tbody>
            </table>
        </div>
    )
}