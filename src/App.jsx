import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BtnToggle from './components/BtnToggle';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import StudyCase from './components/StudyCase';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="App">
      <Router>
        <Navbar />
        <BtnToggle />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/works" exact>
              <Works />
            </Route>
            <Route path="/works/:clientSlug">
              <StudyCase />
            </Route>
          </Switch>
        </main>
      </Router>
    </main>
  );
}

export default App;
