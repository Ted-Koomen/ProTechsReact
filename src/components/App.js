import React, { Component } from 'react';
import Banner from './Banner';
import Logo from './Logo';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Banner />
        <Logo />
      </div>
    )
  }
}

export default App;
