import './App.css';
import React from 'react';
import SignUpInput from './Components/SignUpInput';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import SignInInput from './Components/SignInInput';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<HomePage />}/>
        <Route path='/SignUpInput' element = {<SignUpInput />}/>
        <Route path='/SignInInput' element = {<SignInInput />}/>
      </Routes>
    </div>
  );
}

export default App;
