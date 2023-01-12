import React from 'react'

interface IDisplayBoard {
    numberOfBooks: number;
    getAllBooks: Function;
}

function DisplayBoard({ numberOfBooks: numberOfBooks, getAllBooks: getAllBooks }: IDisplayBoard) {

    return (
        <div className="display-board">
            <div className="number">
                {numberOfBooks}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllBooks()} className="btn btn-warning">all kids books</button>
            </div>
        </div>
    )
}

export default DisplayBoard