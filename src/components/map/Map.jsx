import React from 'react'
import { connect } from 'react-redux'

export class Map extends React.Component {
  renderCourts() {
    console.log(this.props);
    return this.props.courts.map((court) => {
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

function mapStateToProps(state) {
  return {
    activeCourt: state.activeCourt,
  }
}

export default connect(mapStateToProps)(Map);
