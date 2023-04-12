import{legacy_createStore as createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
//import { createStore } from '@reduxjs/toolkit'
import rootReducer from './modules/rootReducer';
import rootSaga  from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
export default store;