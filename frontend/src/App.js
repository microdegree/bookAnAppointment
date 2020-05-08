import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Home/CommonComponents/HeaderContainer'
import Footer from './components/Home/CommonComponents/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <HeaderContainer />
          <br /><br />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

// References 

// https://www.youtube.com/watch?v=Y0-qdp-XBJg
//https://codesandbox.io/s/ol6z72kjy9?file=/src/landing.page.js
