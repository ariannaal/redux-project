export const SEARCH_SONGS = "SEARCH_SONGS";
export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const searchSongs = (query) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            console.log("dati ottenuti dalla ricerca", data.data)
            dispatch(getSearchResults(data));
        } catch (error) {
            console.error('Error searching songs:', error);
        }
    };
};

export const getSearchResults = (results) => {
    return {
        type: 'GET_SEARCH_RESULTS',
        payload: results
    };
};


// azione per mostrare canzone nel player
export const setSelectedSong = (song) => {
    return {
        type: SET_SELECTED_SONG,
        payload: song
    }
}
