import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';



function Apps() {
  return (
    <BrowserRouter>
    
      <Route path="/" component={Dashboard}/>
  
    </BrowserRouter>
  );
}

export default Apps;
