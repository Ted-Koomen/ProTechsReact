import React, { Component } from 'react';
import '../index.css';
const Scroll = require('react-scroll');
const scroller = Scroll.scroller


class Navbar extends Component {
  constructor(props) {
    super(props)
    console.log(Scroll)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    scroller.scrollTo('services', {
      duration: 1500,
      delay: 100,
      smooth: true,
    })

  }

  render() {


    return (
      <div className="navbar">
        <button onClick={this.handleClick}>Services</button>
      </div>
    )
  }
}

export default Navbar
