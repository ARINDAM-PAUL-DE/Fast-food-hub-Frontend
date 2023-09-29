import React from 'react';
import './App.css';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import About from './pages/About';
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from './pages/Dashboard';
import {useState} from 'react';

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col mt-[-60px]">
    <Navbar isLoggedIn={isLoggedIn}
      setIsLoggedIn = {setIsLoggedIn}
    />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}></Home>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>} />
        <Route path="/menu" element={<Menu></Menu>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn}></Dashboard>} />
      </Routes>

    </div>
  );
}

export default App;

