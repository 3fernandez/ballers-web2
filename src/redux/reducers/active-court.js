export default (state = null, action) => {
  switch (action.type) {
    case 'COURT_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
