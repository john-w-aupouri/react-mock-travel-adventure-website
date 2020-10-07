import React from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact></Route>
      </Switch>
    </>
  )
}

export default App
