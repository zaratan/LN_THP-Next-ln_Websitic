import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BtnToggle from './components/BtnToggle';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import { StudyCaseRoute } from './pages/StudyCase';

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
            <StudyCaseRoute path="/works/:clientSlug" />
          </Switch>
        </main>
      </Router>
    </main>
  );
}

export default App;
