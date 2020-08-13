import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('homeStore')
@observer
class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <p>
          counter: {this.props.homeStore.counter}
          <br />
          <button onClick={() => this.props.homeStore.add() }>Add</button>
        </p>
        <Link to='/about'>go to About</Link>
      </div>
    )
  }
}

export default Home;