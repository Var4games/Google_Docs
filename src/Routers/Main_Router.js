import { Route } from '@mui/icons-material'
import React from 'react'
import { Router, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

function Main_Router() {
  return (
    <div>
      <Router>
        <Routes path="/" element={<HomePage></HomePage>}></Routes>3
      </Router>
    </div>
  )
}

export default Main_Router
