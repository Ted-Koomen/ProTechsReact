import React, { Component } from 'react';
import Banner from './Banner';
import Logo from './Logo';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Banner />
        <Logo />
        <Navbar />
      </div>
    )
  }
}

export default App;
