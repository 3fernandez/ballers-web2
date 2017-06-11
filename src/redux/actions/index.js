export const selectCourt = (court) => {
  return {
    type: 'COURT_SELECTED',
    payload: court
  }
}

export function fetchCourts(courts) {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_COURTS',
      fetch: {
        endpoint: '/courts',
      }
    });
  };
}
