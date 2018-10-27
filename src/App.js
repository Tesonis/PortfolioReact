import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/resume.css'
import Navbar from '../src/sections/navbar.jsx';
import Home from '../src/sections/Home.jsx';
import Skills from '../src/sections/Skills.jsx';
import Experience from '../src/sections/Experience.jsx';
import Education from '../src/sections/Education.jsx';
import Portfolio from '../src/sections/Portfolio.jsx';
import Site from '../src/sections/Site.jsx';

class App extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
          isOpen: false
      };
  }
  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }
  render() {
      return (
          <div>
              <Navbar />
              <Home/>
              <Experience/>
              <Skills/>
              <Education/>
              <Portfolio/>
              <Site/>
          </div>
      );
  }
}

export default App;
