import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useStores } from '../stores'; 

const About = observer(() => {
  const { homeStore, aboutStore } = useStores();
  return (
    <div>
      <h1>About page</h1>
      <p>Home Counter: {homeStore.counter}</p>
      <p>
        About Counter: {aboutStore.counter}
        <br />
        <button onClick={() => aboutStore.add() }>Add</button>
      </p>
      <Link to='/'>back to Home</Link>
    </div>
  )
})


// class About extends Component {
//   render() {
//     return (
//       <div>
//         <h1>About page</h1>
//         <p>Home Counter: {this.props.homeStore.counter}</p>
//         <Link to='/'>back to Home</Link>
//       </div>
//     )
//   }
// }

export default About;