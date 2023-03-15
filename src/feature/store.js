import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import notesReducer from './reducer/notesReducer'
export const store = createStore(notesReducer, composeWithDevTools())