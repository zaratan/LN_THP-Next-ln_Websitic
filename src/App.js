import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BtnToggle from './components/BtnToggle';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import StudyCase from './components/StudyCase';
import Navbar from './components/Navbar';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? 'App light' : 'App dark'}>
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
    </div>
  );
}

export default App;
