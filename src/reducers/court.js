export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_COURTS':
      return  {...state, loading: true };

    case 'FETCH_COURTS_SUCCESS':
      return action.payload;

    default:
      return state;
  }
}
