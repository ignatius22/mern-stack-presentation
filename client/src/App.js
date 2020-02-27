import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Landing from './components/Landing';
import TopNav from './components/TopNav';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';


function App() {
  return (

    <Router>
         <div className="App">
           <TopNav />
           <Route exact path='/' component={Landing} />
           <div className="container">
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profile' component={Profile} />
           </div>
        </div>
    </Router>
  
  );
}

export default App;
