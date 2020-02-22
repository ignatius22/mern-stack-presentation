import React from 'react';
import './App.css';
import FormPost from'./components/FormPost'
import Jumbotron from'./components/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
     <Jumbotron />
     <FormPost />
    </div>
  );
}

export default App;
