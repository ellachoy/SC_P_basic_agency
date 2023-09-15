// main components am Anfang importieren
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// dependencies & eigene components mittig importieren
import Header from '../components/Header/Header';
import Basic from './Basic';
import Work from './Work';
import About from './About';
import News from './News';
import Thinking from './Thinking';
import Contact from './Contact';
import Menu from './Menu';
import Footer from '../components/Footer/Footer';


// best practice: css am Ende importieren
import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Basic />
          </Route>

          <Route exact path='/work'>
            <Work />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/news'>
            <News />
          </Route>

          <Route exact path='/thinking'>
            <Thinking />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>

          <Route exact path='/menu'>
            <Menu />
          </Route>

        </Switch>
        <Footer />

      </Router>
    </div>
  );
}
export default App;
