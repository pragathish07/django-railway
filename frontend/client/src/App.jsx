import { useState } from 'react'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import 'vite/modulepreload-polyfill'

function App() {
  

  return (
    <BrowserRouter>
    
    <Router />
    </BrowserRouter>
  )
}

export default App
