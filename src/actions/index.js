export const selectCourt = (court) => {
  console.log(`Selected Court: `, court);
  return {
    type: 'COURT_SELECTED',
    payload: court
  }
}

export function fetchCourts(courts) {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_COURTS',
    });

    const options = {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };

    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        const message = `${response.status} - ${response.statusText}`;
        var error = new Error(message);
        error.response = response
        throw error
      }
    }

    fetch('http://localhost:5000/v1/courts', options)
    .then(checkStatus)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log('parsed json', json);
      dispatch({
        type: 'LOAD_COURTS',
        payload: json.data,
      });
    })
    .catch((ex) => {
      console.error(ex);
    });
  };
}
