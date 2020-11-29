function favorites(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE': {
      const isOnState = state.find(item => item.id === action.favorite.id);

      let newFavorites = null;

      if (isOnState) {
        newFavorites = state;
      } else {
        newFavorites = [...state, action.favorite];
      }

      localStorage.setItem('favorities', JSON.stringify(newFavorites));
      return newFavorites;
    }
    case 'REMOVE_FROM_FAVORITE': {
      const newFavorites = [
        ...state.filter(item => action.favorite.id !== item.id),
      ];
      localStorage.setItem('favorities', JSON.stringify(newFavorites));
      return newFavorites;
    }
    case 'ADD_ALL_TO_FAVORITIES': {
      const favoritiesFromStorage = JSON.parse(
        localStorage.getItem('favorities')
      );

      if (favoritiesFromStorage) {
        return favoritiesFromStorage;
      }

      return state;
    }
    default:
      return state;
  }
}

export default favorites;
