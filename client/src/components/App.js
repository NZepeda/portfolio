import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Portfolio from './Portfolio';
import Footer from './Footer-rd';
import About from './About';

import 'font-awesome/css/font-awesome.min.css';
import '../css/freelancer.css';
import '../css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
