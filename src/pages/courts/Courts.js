import React from 'react';
import { connect } from 'react-redux'
import Link from 'react-toolbox/lib/link';
import Button from "react-toolbox/lib/button";
import Map from '../../components/map/Map';

export class Courts extends React.Component {
  renderCourts() {
    return this.props.courts.map((court) => {
      return (
        <li key={court.id}>
          {court.name}
          <br />
          {court.address}
          <Button label="view" />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Courts</h1>
        <ul>
          { this.renderCourts() }
        </ul>
        <Map courts={this.props.courts} />
        <Link href='/'>Home</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courts: state.courts,
  }
}

export default connect(mapStateToProps)(Courts);
