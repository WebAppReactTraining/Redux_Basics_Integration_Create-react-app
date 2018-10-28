import React, { Component } from 'react';
import Booklist from './components/containers/books-list.js';
import BookDetail from './components/containers/book-detail.js';
//import { connect } from 'react-redux';

class App extends Component {

 render() {
  return (
   <div >
   <Booklist/>
   <BookDetail/>
   </div>
  );
 }
}

export default App;