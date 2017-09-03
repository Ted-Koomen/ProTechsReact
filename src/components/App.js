import React, { Component } from 'react';
import Banner from './Banner';
import Navbar from './Navbar'
import Body from './Body';
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Banner />
        <Body />
        <Navbar />
      </div>
    )
  }
}

export default App;
