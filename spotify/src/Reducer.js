export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null,
};

/*
  The initialState object defines the default values for the global state:
  - user: initially set to null, will hold user information.
  - token: initially set to null, will store the authentication token.
  - playlists: initially an empty array, will store the user's playlists.
  - playing: initially set to false, indicates whether music is currently playing.
  - item: initially set to null, will hold the currently playing item.
  */

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

/*
  The reducer function updates the state based on the action type:
  - Logs the action for debugging purposes.
  - SET_USER: Updates the user property in the state with the provided user data.
  - SET_TOKEN: Updates the token property in the state with the provided token.
  - SET_PLAYLISTS: Updates the playlists property in the state with the provided playlists.
  - SET_DISCOVER_WEEKLY: Updates the discover_weekly property in the state with the provided discover weekly data.
  - default: Returns the current state if the action type does not match any case.
  */

export default reducer;

/*
  Exports the reducer function as the default export, allowing it to be imported and used in other parts of the application.
  */
