import React from 'react';

const BooksListDetails = ({book,handleBookShelf})=>{

    const bookCover = book.coverLinks ? book.coverLinks.smallThumbnail : null;

    return(

        <ol className="books-grid">
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{width:128,height:193,backgroundImage:`url(${bookCover})`}}></div>
                        <div className="book-shelf-changer">
                            <select onChange={e=>handleBookShelf(book,e.target.value)} value={book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want To Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        </ol>
    );
};

export default BooksListDetail;