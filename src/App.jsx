import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/main/Home';
import Perfil from './pages/Profile/Perfil';
import InfoProduc from './pages/InfoProduc/InfoProduc';
import SiteProduct from './pages/SiteProduct/SiteProduct';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/perfil' element={<Perfil/> } />
          <Route path='/vProducto/:id' element={<InfoProduc/> } />
          <Route path='/productos' element ={<SiteProduct/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App