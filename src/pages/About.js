import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Observer, inject } from 'mobx-react';

@inject('homeStore')
@Observer
class About extends Component {

  render() {
    return (
      <div>
        <h1>About page</h1>
        <p>Home Counter: {this.props.homeStore.counter}</p>
        <Link to='/'>back to Home</Link>
      </div>
    )
  }
}

export default About;