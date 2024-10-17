import React from 'react'
import Navbar from './components/navbar/navbar'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App