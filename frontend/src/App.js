import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import About from './components/MyAccount';
import Contact from './components/Contact';

import Navbarmenu from './components/menu/Navbarmenu';
import Banner from './components/Banner';
import MyAccount from './components/MyAccount';




function App() {
  return (
    <React.Fragment>
      
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbarmenu />
        
        <Routes>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>

        </Routes>
      </Router>
      <Banner />
      <MyAccount />
      
    </React.Fragment>
    
    
  );
}

export default App;
