import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import build from 'redux-object';

import Button from "react-toolbox/lib/button";
import Map from '../map/Map';

import { selectCourt, fetchCourts } from '../../redux/actions/';
import Header from '../../components/header/Header';


export class Courts extends React.Component {
  componentDidMount() {
    this.props.fetchCourts();
  }

  renderCourts() {
    return build(this.props, 'courts').map(court => {
      return (
        <li key={court.id}>
          {court.name}
          <br />
          {court.address}
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

export default connect(
  state => (
    { courts: state.courts }
  ),
  dispatch => (
    bindActionCreators({
      selectCourt,
      fetchCourts,
    }, dispatch)
  )
)(Courts);
