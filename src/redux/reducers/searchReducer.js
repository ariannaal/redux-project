import { GET_SEARCH_RESULTS, SEARCH_SONGS } from "../actions/actions";


const initialState = {
    query: '',
    searchResults: []
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_SONGS:
            return {
                ...state,
                query: action.payload
            };
        case GET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload.data
            };
        default:
            return state;
    }
};

export default searchReducer;