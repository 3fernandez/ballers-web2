export const selectCourt = (court) => {
  console.log(`Selected Court: `, court);
  return {
    type: 'COURT_SELECTED',
    payload: court
  }
}
