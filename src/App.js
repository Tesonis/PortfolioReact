import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/css/resume.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/sections/navbar.jsx';
import Home from '../src/sections/Home.jsx';

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
          </div>
      );
  }
}

export default App;
