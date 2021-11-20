import React, {Component} from 'react'
import BooksListDetails from './BooksListDetails'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'

class Books extends Component{
    state = {
        currentlyReading:[],
        wantToRead:[],
        read:[]
    };

    componentDidMount(){
        this.getBooks();
    }

    getBooks(){
        BooksAPI.getAll().then(books => {
            const currRead = new RegExp(escapeRegExp('currentlyReading'));
            let currentlyReading = books ? books.filter(book => currRead.test(book.shelf)) : null;
    
            const wantRead = new RegExp(escapeRegExp('wantToRead'));
            let wantToRead = books ? books.filter(book => wantRead.test(book.shelf)) : null;
      
            const Read = new RegExp(escapeRegExp('read'));
            let read = books ? books.filter(book => Read.test(book.shelf)) : null;
            
            this.setState({ currentlyReading, wantToRead, read });
        });
    }
    handleBookShelf(book,shelf){
        BooksAPI.update(book,shelf).then(()=>this.getBooks());
    }
    renderBookShelf(books,title){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    {books.map((book,index)=>
                    <BooksListDetails key={index} book={book} handleBookShelf={this.handleBookShelf()}/>
                    )}
                </div>
            </div>
        )
    }
    render(){
        

        return(
            <div className="list-books">
                    <div className="list-books-title">
                    <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {this.renderBookShelf(currentlyReading,'Currently Reading')}
                            {this.renderBookShelf(wantToRead,'Want To Read')}
                            {this.renderBookShelf(read,'Read')}
                        </div>
                    </div>
                    <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                    </div>
                </div>  
        );
    }
}

export default Books;