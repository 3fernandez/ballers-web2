import React from 'react'
import { connect } from 'react-redux'
import build from 'redux-object'

//@connect(
  //state => (
    //{
      //activeCourt: state.activeCourt
    //}
  //)
//)
export class Map extends React.Component {
  renderCourts() {
    return build(this.props, 'courts').map(court => {
      const activeCourt = this.props.activeCourt;
      const focused = activeCourt && court.id === activeCourt.id ? "***" : "";
      return (
        <li key={court.id} >
          {court.name}
          {focused}
          <br />
          {court.coordinates[0]}, {court.coordinates[1]}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Map</h2>
        <div>
          <ul>
            { this.renderCourts() }
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => (
    {
      activeCourt: state.activeCourt
    }
  ),
)(Map);
