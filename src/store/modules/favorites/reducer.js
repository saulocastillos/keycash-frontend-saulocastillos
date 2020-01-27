export default function favorites(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return [state, action.favorite];
    default:
      return state;
  }
}
