import Home  from './pages/Home';
import Settings  from './pages/Settings';
import Analytics  from './pages/Analytics';
import Signup  from './pages/Signup';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products';



const App = () => {
  return (
    <> 
    <BrowserRouter>
    <Routes>
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/analytics' exact element={<Analytics />} />
        <Route path='/settings' exact element={<Settings />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App