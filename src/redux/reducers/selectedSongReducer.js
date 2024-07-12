import { SET_SELECTED_SONG } from "../actions/actions";

const initialState = {
    selectedSong: null
}

const selectedSongReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_SONG:
            return {
                ...state,
                selectedSong: action.payload
            };
        default:
            return state;
    }
}

export default selectedSongReducer;