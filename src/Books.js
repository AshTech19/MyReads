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
        BooksAPI.getAll().then(books => this.setState({books}));
    }

    handleBookShelf(book,shelf){
        BooksAPI.update(book,shelf).then(()=>this.getBooksShelf());
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
        const currRead = new RegExp(escapeRegExp('currentlyReading'));
        let currentlyReading = this.state.books.filter(book => currRead.test(book.shelf));
  
        const wantRead = new RegExp(escapeRegExp('wantToRead'));
        let wantToRead = this.state.books.filter(book => wantRead.test(book.shelf));
  
        const Read = new RegExp(escapeRegExp('read'));
        let read = this.state.books.filter(book => Read.test(book.shelf));

        console.log(read);

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