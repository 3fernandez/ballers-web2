import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import build from 'redux-object';

import Button from "react-toolbox/lib/button";
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Map from '../map/Map';

import { selectCourt, fetchCourts } from '../../redux/actions/';
import Header from '../../components/header/Header';

import styles from "./Courts.scss";

export class Courts extends React.Component {
  componentDidMount() {
    this.props.fetchCourts();
  }

  renderCourts() {
    return build(this.props, 'courts').map(court => {
      let x = "http://maps.googleapis.com/maps/api/staticmap?style=feature:administrative|element:labels.text.fill|color:0x444444&style=feature:landscape|element:all|color:0xf2f2f2&style=feature:poi|element:all|visibility:off&style=feature:road|element:all|saturation:-100|lightness:45&style=feature:road.highway|element:all|visibility:simplified&style=feature:road.arterial|element:labels.icon|visibility:off&style=feature:transit|element:all|visibility:off&style=feature:water|element:all|color:0x46bcec|visibility:on&zoom=15&size=300x300&markers=-22.8903048,-43.345593399999984"
      console.log(x === court.mapUrl);
      return (
        <li key={court.id}>
          <Card style={{width: '350px'}}>
            <CardMedia aspectRatio="wide" image={court.mapUrl} />
            <CardTitle title={court.name} />
            <CardText>{court.address}</CardText>
            <CardActions>
              <Button label="view" onClick={ () => this.props.selectCourt(court) } />
            </CardActions>
          </Card>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Courts</h1>
        <ul className={styles["court-list"]}>
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
