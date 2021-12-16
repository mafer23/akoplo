import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbarmenu from './components/menu/Navbarmenu';
import MyAccount from './components/MyAccount';
import Register from './components/Register';
// import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div>
        <Navbarmenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        
      </div>
  
      <Footer/>  
 
    </Router>
    
  );
  }

export default App;
