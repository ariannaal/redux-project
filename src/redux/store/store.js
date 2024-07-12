import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';


const rootReducer = combineReducers({
    search: searchReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;