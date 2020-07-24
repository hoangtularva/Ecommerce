import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;