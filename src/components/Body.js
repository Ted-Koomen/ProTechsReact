import React, { Component } from 'react';
import Services from './Services';

class Body extends Component {
  render() {
    return (
      <div className="body">
        <p>this is where the body goes.</p>
        <Services />
    </div>
    )
  }
}

export default Body;
