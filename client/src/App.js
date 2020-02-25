import React from 'react';
import './App.css';
//import FormPost from'./components/FormPost'
import Jumbotron from'./components/Jumbotron'
import Layout from'./components/Layout'
import CarouseView from './components/CarouseView'
import TopNav from './components/TopNav'
import FooteR from './components/FooteR'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'



function App() {
  return (
    <div className="App">
      <TopNav/>
      <CarouseView />
      <Jumbotron />
      <Layout />
      <Container>
      <FooteR />
      </Container>
      
      
      
      
    </div>
  );
}

export default App;
