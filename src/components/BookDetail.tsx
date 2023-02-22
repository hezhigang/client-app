import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { AppService } from '../services/app.service';
import { Link } from "react-router-dom";

export const BookDetail = () => {
    let param = useParams();
    const appService = new AppService();
    const [book, setBook] = useState<any>([]);

    const getSelectedBook = async (id: any) => {
        const book = await appService.getSpecficBook(id);
        setBook(book);
    }

    useEffect(() => {
        getSelectedBook(param.id);
    }, []);

    return (
        <div key='selectedBook' className='card'>
            <div><Link to={'/'}>Back to list</Link></div>
            <br />
            <img className="bookCover" src={"../" + book.thumbnail} alt="Cover of book" />
            <div>
                <span className='bookTitle'>{book.title}</span><br />
                <span className='bookAuthor'>{book.author}</span><br />
                <span className='sku'>{book.sku}</span>
                <p>{book.description}</p>
            </div>
            <div>
                <span><button onClick={() => alert('test')}>Purchase - CAD ${book.price}</button></span>
            </div>
        </div>
    )
}