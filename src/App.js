import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext } from 'contexts/ThemeContext';
import Navbar from 'components/Navbar';
import BtnToggle from 'components/BtnToggle';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';

function App() {
  const {theme} = useContext(ThemeContext);
   
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
