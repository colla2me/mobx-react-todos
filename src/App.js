import React, { Suspense } from 'react';
import './App.css';
import {
 Switch,
 Route
} from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<div>loading...</div>}>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
