import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import bookReducer from './reducer_books';
import activeBook from './reducer_active_book';

export default combineReducers({
 simpleReducer:simpleReducer,
 books:bookReducer,
 activeBook:activeBook
});