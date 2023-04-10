import{legacy_createStore as createStore} from 'redux'

//import { createStore } from '@reduxjs/toolkit'
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);
export default store;