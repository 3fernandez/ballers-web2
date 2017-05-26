const initialState ={
  courts: [],
};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_COURTS':
      return state;

    case 'LOAD_COURTS':
      return {...state, courts: action.payload };

    default:
      return state;
  }
}
