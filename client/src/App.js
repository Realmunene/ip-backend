
import React from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';
import Package from './components/Package';
import Lesson from './components/Lesson';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/lesson" element={<Lesson/>}/>
        <Route path="/package" element={<Package/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
