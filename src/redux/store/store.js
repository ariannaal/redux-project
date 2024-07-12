import { configureStore, combineReducers } from '@reduxjs/toolkit';
import searchReducer from '../reducers/searchReducer';
import selectedSongReducer from '../reducers/selectedSongReducer';
import favouriteReducer from '../reducers/favouriteReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    selectedSong: selectedSongReducer,
    favourites: favouriteReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;