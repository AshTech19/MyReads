import React from 'react'
import SearchBooks from './SearchBooks'
import Books from './Books'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component{
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (<SearchBooks/>) : (<Books/>)}
      </div>
    );
  }
}

export default BooksApp;