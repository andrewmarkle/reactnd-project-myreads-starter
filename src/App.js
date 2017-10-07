import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
// import Search from './Search'
import ListBooks from './ListBooks'

class App extends React.Component {
  // state = {
  //   *
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.

  //   showSearchPage: false
  // }



  // constructor() {
  //   super();

  //   this.addBook = this.addBook.bind(this);
  //   this.state = {
  //     books: {},
  //     showSearchPage: false
  //   }
  // }

  // addBook(book) {
  //   const books =   BooksAPI.getAll().then((books) => {
  //     this.setState({ books });

  //   });
  //   // books[`book${bookId}`] = book;

  // }

  render() {
    return (
      <div className="app">
       <ListBooks />
      </div>
    )
  }
}

export default App
