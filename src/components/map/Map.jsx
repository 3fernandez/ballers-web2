import React from 'react'

export default class Map extends React.Component {
  renderCourts() {
    return this.props.courts.map((court) => {
      const focused = court.focused ? "***" : "";
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
