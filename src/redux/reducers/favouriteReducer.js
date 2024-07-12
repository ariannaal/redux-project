import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITE } from "../actions/actions"

const initialState = {
    favourites: []
};

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            };
        case REMOVE_FROM_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(song => song.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default favouriteReducer;