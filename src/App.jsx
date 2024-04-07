import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/main/Home';
import Perfil from './pages/Profile/Perfil';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/perfil' element={<Perfil/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App