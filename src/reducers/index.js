const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters, action.payload]
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favoriteCharacters: state.favoriteCharacters.filter( items => items.data.id !== action.payload )
      };
      case 'SET_SETCTION':
        return {
          ...state,
          sectionActive: action.payload
        };
    default:
      return state;
  }
};

export default reducer;