import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import '../index.css'
import Logo from './Logo'

class Banner extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Pro-Techs Pest Control</h1>
          <p>Northport, New York 631-462-6275</p>
        </div>
        <Logo />
      </div>
    )
  }
}


export default Banner
