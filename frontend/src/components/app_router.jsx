import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Procesos from '../pages/procesos'
import Marti from '../pages/marti'
import Vacantes from '../pages/vacantes'
import VacantesBD from '../pages/vacantesbd'
import VacantesISW from '../pages/vacantesisw'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/procesos' element={<Procesos/>} />
        <Route path='/marti' element={<Marti/>} />
        <Route path='/vacantes' element={<Vacantes/>} />
        <Route path='/vacantesbd' element={<VacantesBD/>} />
        <Route path='/vacantesisw' element={<VacantesISW/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
