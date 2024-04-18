import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InfoProduc from './pages/InfoProduc/InfoProduc';
import Login from './pages/Login/Login';
import Perfil from './pages/Profile/Perfil';
import Register from './pages/Register/Register';
import SiteProduct from './pages/SiteProduct/SiteProduct';
import Home from './pages/main/Home';

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