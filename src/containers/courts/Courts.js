import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from "react-toolbox/lib/button";
import Map from '../map/Map';

import { selectCourt, fetchCourts } from '../../actions/';
import Header from '../../components/header/Header';

export class Courts extends React.Component {
  componentDidMount() {
    this.props.fetchCourts();
  }

  renderCourts() {
    return this.props.courts.map((court) => {
      return (
        <li key={court.id}>
          {court.attributes.name}
          <br />
          {court.attributes.address}
          <Button label="view" onClick={ () => this.props.selectCourt(court) } />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Courts</h1>
        <ul>
          { this.renderCourts() }
        </ul>
        <Map courts={this.props.courts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.courts;
}

function matchDispatchProps(dispatch) {
  return bindActionCreators({
    selectCourt,
    fetchCourts,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchProps)(Courts);
