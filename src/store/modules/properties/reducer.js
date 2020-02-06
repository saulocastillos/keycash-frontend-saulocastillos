export default function properties(state = [], action) {
  switch (action.type) {
    case 'FILL_PROPERTIES':
      return [...action.properties];
    default:
      return state;
  }
}
