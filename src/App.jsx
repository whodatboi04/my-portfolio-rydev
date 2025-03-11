import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import Portfolio from './_portfolio/portfolio';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Portfolio />
      <Footer />
    </Router>
  )
}

export default App
