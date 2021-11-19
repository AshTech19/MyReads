import React, {Component} from 'react'
import BooksListDetails from './BooksListDetails'

class Books extends Component{
    render(){
        return(
            <div className="list-books">
                    <div className="list-books-title">
                    <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <li>
                                    <BooksListDetails/>
                                </li>
                            </ol>
                        </div>
                        </div>
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