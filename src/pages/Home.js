import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useStores } from '../stores';

const Home = observer(() => {
  const { homeStore } = useStores();
  return (
    <div>
      <h1>Home page</h1>
      <p>
        counter: {homeStore.counter}
        <br />
        <button onClick={() => homeStore.add() }>Add</button>
      </p>
      <Link to='/about'>go to About</Link>
    </div>
  )
})

// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Home page</h1>
//         <p>
//           counter: {this.props.homeStore.counter}
//           <br />
//           <button onClick={() => this.props.homeStore.add() }>Add</button>
//         </p>
//         <Link to='/about'>go to About</Link>
//       </div>
//     )
//   }
// }

export default Home;