import React from 'react';
//import { Link } from 'react-router-dom';
import Link from "react-toolbox/lib/link";

export default class Courts extends React.Component {
  render() {
    return (
      <div>
        <h1>Courts</h1>
        <Link href="/">Home</Link>
      </div>
    );
  }
}
