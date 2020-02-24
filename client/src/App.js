import React from 'react';
import './App.css';
//import FormPost from'./components/FormPost'
import Jumbotron from'./components/Jumbotron'
import Layout from'./components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
//import {Col,Row,Container} from 'react-bootstrap'



function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Layout />
    </div>
  );
}

export default App;
