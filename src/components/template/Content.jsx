import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Services from '../services/Services'
import Contact from '../contact/Contact'

function Content() {
  return (
    <main className="content">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/servicos' element={<Services />}></Route>
        <Route path='/contato' element={<Contact />}></Route>
      </Routes>
    </main>
  )
}

export default Content