import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Projects from './component/Projects';

// import Home from './pages/Home';
// import About from '../pages/About';
// import Service from '../pages/Services'

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </>
  );
}

export default App;
