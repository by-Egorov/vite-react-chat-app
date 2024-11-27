import React, { useEffect } from 'react'
import LayoutPage from './page/LayoutPage/LayoutPage.jsx'
import { Route, Router, Routes } from 'react-router-dom'
import Register from './page/Register/Register.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/:id' element={<LayoutPage />} />
      <Route path='/login' element={<Register />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<LayoutPage />} />
    </Routes>
  )
}

export default App
