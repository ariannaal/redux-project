import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';
import selectedSongReducer from '../reducers/selectedSongReducer';



const rootReducer = combineReducers({
    search: searchReducer,
    selectedSong: selectedSongReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;