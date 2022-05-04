export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    default:
      return state;
  }
};
