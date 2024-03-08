import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import DatesRegister from './components/pages/datesRegister/DatesRegister'

function App() {
  return (
    <>
    {/* <Router>
    <Routes>
      <Route path='/login' element={<Login/>} />
    </Routes>
    </Router> */}
    <Login/>
    {/* <Register/> */}
    </>
  )
}

export default App